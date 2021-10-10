import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Csgo } from 'src/app/models/cs-go';
import { Elo } from 'src/app/models/elo';
import { statsFeatureKey } from '../reducers/stats.reducer';
import { StatsState } from '../state/stats-state';

export const statsFeatureState = createFeatureSelector<StatsState>(statsFeatureKey);

export const selectCsGoDetailsSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return stats.playerDetails.games ? stats.playerDetails.games.csgo : {} as Csgo;
    }
);

export const selectPlayerIdSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return stats.playerDetails ? stats.playerDetails.player_id : String();
    }
);

export const selectLastResultsSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return stats.playerStatsPerGame.lifetime ? stats.playerStatsPerGame.lifetime['Recent Results'] : [] as String[];
    }
);

export const selectMatchesSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return stats.playerMatches.items ? stats.playerMatches.items : [];
    }
);

export const selectEloDiffSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return stats.eloDiff;
    }
);

export const selectBasicDataSelector = createSelector(
    statsFeatureState,
    (stats) => {
        return {level: stats.basic.lvl, elo: stats.basic.elo, eloDiff: Number(stats.basic.todayEloDiff.replace(/^[+]/g, ''))} as Elo;
    }
);

