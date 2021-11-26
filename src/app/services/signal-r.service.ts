import { Inject, Injectable, OnDestroy } from '@angular/core';
import { Params } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { SignalREvents } from '../enums/signal-r-events.enum';
import { FACEIT_STATS_HUB, NOTIFICATIONS_HUB } from '../injection-tokens';
import { NotificationData } from '../models/notification-data';
import { getBasicStats, showNotification } from '../store/actions/stats.actions';
import { selectRouteParamsSelector } from '../store/selectors/global-state.selectors';
import { selectFaceItDataSelector } from '../store/selectors/stats.selector';
import { GlobalState } from '../store/state/global-state';

@UntilDestroy()
@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnDestroy {
  private faceItStatsHubConnection: signalR.HubConnection;
  private notificationsHubConnection: signalR.HubConnection;
  private routeParams: Params;
  private playerId: string;

  constructor(
    @Inject(FACEIT_STATS_HUB) private faceitStatsHub: string,
    @Inject(NOTIFICATIONS_HUB) private notificationsHub: string,
    private store: Store<GlobalState>) {

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
    this.faceItStatsHubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.faceitStatsHub)
      .build();

    this.notificationsHubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.notificationsHub)
      .build();
  }

  public startConnection(): void {
    this.faceItStatsHubConnection
      .start()
      .then(() => {
        this.registerFaceItStatsSignalEvents();
      })
      .catch(() => {
        setTimeout(() => {
          this.startConnection();
        }, 3000);
      });    
    
    this.notificationsHubConnection
      .start()
      .then(() => {
        this.registerNotificationsSignalEvents();
      })
      .catch(() => {
        setTimeout(() => {
          this.startConnection();
        }, 3000);
      });
  }

  private registerFaceItStatsSignalEvents(): void {
    this.faceItStatsHubConnection.on(SignalREvents.MatchObjectCreated, (playerId: string) => {
      if(this.playerId === playerId) {
        this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.faceItStatsHubConnection.on(SignalREvents.MatchStatusAborted, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.faceItStatsHubConnection.on(SignalREvents.MatchStatusCancelled, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.faceItStatsHubConnection.on(SignalREvents.MatchStatusConfiguring, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.faceItStatsHubConnection.on(SignalREvents.MatchStatusFinished, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
    this.faceItStatsHubConnection.on(SignalREvents.MatchStatusReady, (playerId: string) => {
      if(this.playerId === playerId) {
      this.store.dispatch(getBasicStats({nickname: this.routeParams.name}))
      }
    });
  }

  private registerNotificationsSignalEvents(): void {
    this.notificationsHubConnection.on(SignalREvents.NotificationEvent, (notificationData: NotificationData) => {
        this.store.dispatch(showNotification({notificationData}))
    });
  }
}
