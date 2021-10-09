import { Action, createReducer, on } from '@ngrx/store';
import { FaceitResponse } from 'src/app/models/faceit-response';
import { PlayerDetails } from 'src/app/models/player-details';
import { PlayerMatches } from 'src/app/models/player-matches';
import { PlayerStatsPerGame } from 'src/app/models/player-stats-per-game';
import { getBasicStatsSuccceeded, getEloDiffSucceeded, getPlayerDetailsSucceeded, getPlayerMatchesSucceeded, getPlayerStatsSucceeded } from '../actions/stats.actions';
import { StatsState } from '../state/stats-state';

export const statsFeatureKey = "stats";

const intitialState: StatsState = {
  eloDiff: 0,
  playerDetails: {} as PlayerDetails,
  playerMatches: {} as PlayerMatches,
  playerStatsPerGame: {} as PlayerStatsPerGame,
  basic: { elo: 0, lvl: 1, todayEloDiff: "0", stats: {}, latestMatches: [] } as FaceitResponse
};

export const reducer = createReducer(
  intitialState,
  on(getPlayerDetailsSucceeded, (state, action) => ({
    ...state,
    playerDetails: action.playerDetails
  })),
  on(getPlayerStatsSucceeded, (state, action) => ({
    ...state,
    playerStatsPerGame: action.playerStats
  })),
  on(getPlayerMatchesSucceeded, (state, action) => ({
    ...state,
    playerMatches: action.matches
  })),
  on(getEloDiffSucceeded, (state, action) => ({
    ...state,
    eloDiff: action.eloDiff
  })),
  on(getBasicStatsSuccceeded, (state, action) => ({
    ...state,
    basic: action.response
  }))
);

export function statsReducer(
  state: StatsState | undefined,
  action: Action
): StatsState {
  return reducer(state, action);
}
