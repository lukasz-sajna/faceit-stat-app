import { LatestMatch } from './latest-match';
import { LatestMatchesTrend } from './latest-matches-trend';
import { Stats } from './stats';


export interface FaceitResponse {
    elo: number;
    lvl: number;
    todayEloDiff: string;
    latestMatchesTrend: LatestMatchesTrend;
    latestMatches: LatestMatch[];
    stats: Stats;
    ladder?: any;
    report?: any;
    trend?: any;
    last_match?: any;
}