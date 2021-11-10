import { Inject, Injectable, OnDestroy } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { SignalREvents } from '../enums/signal-r-events.enum';
import { FACEIT_STATS_HUB } from '../injection-tokens';
import { QueryParams } from '../models/query-params';
import { selectMappedQueryParamsSelector, selectRouteParamsSelector } from '../store/selectors/global-state.selectors';
import { GlobalState } from '../store/state/global-state';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnDestroy {
  private hubConnection: signalR.HubConnection;
  private queryParams: QueryParams;

  constructor(@Inject(FACEIT_STATS_HUB) private faceitStatsHub: string, private store: Store<GlobalState>) {
    this.store.select(selectRouteParamsSelector).pipe(
      untilDestroyed(this),
      withLatestFrom(this.store.select(selectMappedQueryParamsSelector)),
      tap(([_, queryParams]) => {
        this.queryParams = queryParams;
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
    this.hubConnection.on(SignalREvents.MatchObjectCreated, () => {
      console.log(SignalREvents.MatchObjectCreated)
    });
    this.hubConnection.on(SignalREvents.MatchStatusAborted, () => {
      console.log(SignalREvents.MatchStatusAborted)
    });
    this.hubConnection.on(SignalREvents.MatchStatusCancelled, () => {
      console.log(SignalREvents.MatchStatusCancelled)
    });
    this.hubConnection.on(SignalREvents.MatchStatusConfiguring, () => {
      console.log(SignalREvents.MatchStatusConfiguring)
    });
    this.hubConnection.on(SignalREvents.MatchStatusFinished, () => {
      console.log(SignalREvents.MatchStatusFinished)
    });
    this.hubConnection.on(SignalREvents.MatchStatusReady, () => {
      console.log(SignalREvents.MatchStatusReady)
    });
  }
}
