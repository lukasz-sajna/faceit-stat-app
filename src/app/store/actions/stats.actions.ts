import { createAction, props } from '@ngrx/store';
import { FaceitResponse } from 'src/app/models/faceit-response';
import { PlayerDetails } from 'src/app/models/player-details';
import { PlayerMatches } from 'src/app/models/player-matches';
import { PlayerStatsPerGame } from 'src/app/models/player-stats-per-game';
import { GET_BASIC_STATS, GET_BASIC_STATS_SUCCEEDED, GET_ELO_DIFF, GET_ELO_DIFF_SUCCEEDED, GET_IS_PLAYER_EXISTING, GET_IS_PLAYER_EXISTING_SUCCEEDED, GET_PLAYER_DETAILS, GET_PLAYER_DETAILS_SUCCEEDED, GET_PLAYER_MATCHES, GET_PLAYER_MATCHES_SUCCEEDED, GET_PLAYER_STATS, GET_PLAYER_STATS_SUCCEEDED } from './stats.action-names';

export const getPlayerDetails = createAction(GET_PLAYER_DETAILS, props<{ nickname: string }>());
export const getPlayerDetailsSucceeded = createAction(GET_PLAYER_DETAILS_SUCCEEDED, props<{ playerDetails: PlayerDetails }>());

export const getIsPlayerExisting = createAction(GET_IS_PLAYER_EXISTING, props<{ nickname: string }>());
export const getIsPlayerExistingSucceeded = createAction(GET_IS_PLAYER_EXISTING_SUCCEEDED, props<{ exists: boolean }>());

export const getPlayerStats = createAction(GET_PLAYER_STATS, props<{ playerId: string }>());
export const getPlayerStatsSucceeded = createAction(GET_PLAYER_STATS_SUCCEEDED, props<{ playerStats: PlayerStatsPerGame }>());

export const getPlayerMatches = createAction(GET_PLAYER_MATCHES, props<{ playerId: string }>());
export const getPlayerMatchesSucceeded = createAction(GET_PLAYER_MATCHES_SUCCEEDED, props<{ matches: PlayerMatches }>());

export const getEloDiff = createAction(GET_ELO_DIFF);
export const getEloDiffSucceeded = createAction(GET_ELO_DIFF_SUCCEEDED, props<{ eloDiff: number }>());

export const getBasicStats = createAction(GET_BASIC_STATS, props<{ nickname: string }>());
export const getBasicStatsSuccceeded = createAction(GET_BASIC_STATS_SUCCEEDED, props<{ response: FaceitResponse }>());