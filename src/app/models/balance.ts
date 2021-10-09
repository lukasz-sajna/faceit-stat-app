import { Period } from '../enums/period.enum';

export interface Balance {
    wins: number;
    losses: number;
    period: Period;
}
