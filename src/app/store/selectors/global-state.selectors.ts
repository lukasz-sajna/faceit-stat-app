import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GlobalState } from '../state/global-state';
import * as fromRouter from '@ngrx/router-store';
import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';

export const selectUrlSelector = getRouterSelectors().selectUrl;
export const selectRouteDataSelector = getRouterSelectors().selectRouteData;
export const selectQueryParamsSelector = getRouterSelectors().selectQueryParams;
export const selectRouteParamsSelector = getRouterSelectors().selectRouteParams;
