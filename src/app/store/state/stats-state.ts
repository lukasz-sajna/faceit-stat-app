import { FaceitResponse } from 'src/app/models/faceit-response';
import { PlayerDetails } from 'src/app/models/player-details';
import { PlayerMatches } from 'src/app/models/player-matches';
import { PlayerStatsPerGame } from 'src/app/models/player-stats-per-game';

export interface StatsState {
    eloDiff: number;
    playerDetails: PlayerDetails,
    playerMatches: PlayerMatches,
    playerStatsPerGame: PlayerStatsPerGame
    basic: FaceitResponse
}
