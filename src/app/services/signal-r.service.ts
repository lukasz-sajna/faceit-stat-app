import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Params } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { SignalREvents } from '../enums/signal-r-events.enum';
import { FACEIT_STATS_HUB } from '../injection-tokens';
import { QueryParams } from '../models/query-params';
import { getBasicStats } from '../store/actions/stats.actions';
import { selectMappedQueryParamsSelector, selectRouteParamsSelector } from '../store/selectors/global-state.selectors';
import { GlobalState } from '../store/state/global-state';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnDestroy {
  private hubConnection: signalR.HubConnection;
  private queryParams: QueryParams;
  private routeParams: Params;

  constructor(@Inject(FACEIT_STATS_HUB) private faceitStatsHub: string, private store: Store<GlobalState>) {

    this.store.select(selectRouteParamsSelector).pipe(
        untilDestroyed(this),
        withLatestFrom(this.store.select(selectMappedQueryParamsSelector)),
        tap(([routeParams, queryParams]) => {
          this.queryParams = queryParams;
          this.routeParams = routeParams;
        })
      ).subscribe()
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
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
    });
    this.hubConnection.on(SignalREvents.MatchStatusAborted, () => {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
    });
    this.hubConnection.on(SignalREvents.MatchStatusCancelled, () => {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
    });
    this.hubConnection.on(SignalREvents.MatchStatusConfiguring, () => {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
    });
    this.hubConnection.on(SignalREvents.MatchStatusFinished, () => {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
    });
    this.hubConnection.on(SignalREvents.MatchStatusReady, () => {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
    });
  }
}
