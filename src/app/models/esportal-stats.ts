import { LastResult } from './last-result';

export interface EsportalStats {
    elo: number;
    level: number;
    eloDiff: number;
    lastResults: LastResult[]
}
