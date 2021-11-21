import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Params } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { SignalREvents } from '../enums/signal-r-events.enum';
import { FACEIT_STATS_HUB } from '../injection-tokens';
import { getBasicStats } from '../store/actions/stats.actions';
import { selectRouteParamsSelector } from '../store/selectors/global-state.selectors';
import { selectFaceItDataSelector } from '../store/selectors/stats.selector';
import { GlobalState } from '../store/state/global-state';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnDestroy {
  private hubConnection: signalR.HubConnection;
  private routeParams: Params;
  private playerId: string;

  constructor(@Inject(FACEIT_STATS_HUB) private faceitStatsHub: string, private store: Store<GlobalState>) {

    this.store.select(selectRouteParamsSelector).pipe(
        untilDestroyed(this),
        tap((routeParams) => {
          this.routeParams = routeParams;
        })
      ).subscribe()

    this.store.select(selectFaceItDataSelector).pipe(
      untilDestroyed(this),
      tap((data) => {
        this.playerId = data.playerId;
      })
    ).subscribe();
  }

  public ngOnDestroy(): void { }

  public buildConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.faceitStatsHub)
      .build();
  }

  public startConnection(): void {
    this.hubConnection
      .start()
      .then(() => {
        this.registerSignalEvents();
      })
      .catch(() => {
        setTimeout(() => {
          this.startConnection();
        }, 3000);
      });
  }

  private registerSignalEvents(): void {
    this.hubConnection.on(SignalREvents.MatchObjectCreated, (playerId: string) => {
      if(this.playerId === playerId) {
        this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.hubConnection.on(SignalREvents.MatchStatusAborted, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.hubConnection.on(SignalREvents.MatchStatusCancelled, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.hubConnection.on(SignalREvents.MatchStatusConfiguring, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.hubConnection.on(SignalREvents.MatchStatusFinished, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.hubConnection.on(SignalREvents.MatchStatusReady, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
  }
}
