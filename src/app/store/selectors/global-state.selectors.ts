import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from '../state/global-state';
import * as fromRouter from '@ngrx/router-store';
import { QueryParams } from 'src/app/models/query-params';

const selectRouter = createFeatureSelector<GlobalState, fromRouter.RouterReducerState<any>>('router');

export const selectUrlSelector = fromRouter.getSelectors(selectRouter).selectUrl;
export const selectRouteDataSelector = fromRouter.getSelectors(selectRouter).selectRouteData;
export const selectQueryParamsSelector = fromRouter.getSelectors(selectRouter).selectQueryParams;
export const selectRouteParamsSelector = fromRouter.getSelectors(selectRouter).selectRouteParams;

export const selectMappedQueryParamsSelector = createSelector(
    selectQueryParamsSelector,
    (queryParams) => {
        return !!queryParams
            ? { widget: queryParams.widget, period: queryParams.period, refreshRate: queryParams.refreshRate } as QueryParams
            : {} as QueryParams;
    }
);
