import { LatestMatch } from './latest-match';
import { Stats } from './stats';

export interface FaceitResponse {
    lvl: number;
    elo: number;
    todayEloDiff: string;
    latestMatches: LatestMatch[];
    stats: Stats;
}