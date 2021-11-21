import { createFeatureSelector, createSelector } from '@ngrx/store';
import { statsFeatureKey } from '../reducers/stats.reducer';
import { StatsState } from '../state/stats-state';

export const statsFeatureState = createFeatureSelector<StatsState>(statsFeatureKey);

export const selectFaceItDataSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return stats.faceItData;
    }
);

