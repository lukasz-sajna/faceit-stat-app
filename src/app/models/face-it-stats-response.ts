import { LastResult } from './last-result';

export interface FaceItStatsResponse {
    playerId: string;
    level: number;
    elo: number;
    eloDiff: number;
    isEloCalculating: boolean;
    lastResults: LastResult[];
}