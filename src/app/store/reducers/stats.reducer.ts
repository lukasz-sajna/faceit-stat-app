import { Action, createReducer, on } from '@ngrx/store';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';
import { LastResult } from 'src/app/models/last-result';
import { NotificationData } from 'src/app/models/notification-data';
import { getBasicStatsSuccceeded, showNotification } from '../actions/stats.actions';
import { StatsState } from '../state/stats-state';

export const statsFeatureKey = "stats";

const intitialState: StatsState = {
  faceItData: {
    playerId: String(),
    elo: 0,
    level: 1,
    eloDiff: 0,
    isEloCalculating: false,
    lastResults: [] as LastResult[]
  } as FaceItStatsResponse,
  notification: {} as NotificationData
};

export const reducer = createReducer(
  intitialState,
  on(getBasicStatsSuccceeded, (state, action) => ({
    ...state,
    faceItData: {
      playerId: action.response.playerId,
      elo: action.response.elo,
      level: action.response.level,
      eloDiff: !action.response.isEloCalculating ? action.response.eloDiff : state.faceItData.eloDiff,
      isEloCalculating: action.response.isEloCalculating,
      lastResults: action.response.lastResults
    }
  })),
  on(showNotification, (state, action) => ({
    ...state,
    notification: action.notificationData
  }))
);

export function statsReducer(
  state: StatsState | undefined,
  action: Action
): StatsState {
  return reducer(state, action);
}
