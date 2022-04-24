import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { delay, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { FaceitApiService } from 'src/app/services/faceit-api.service';
import { getBasicStats, getBasicStatsSuccceeded, getChallangeData, setChallangeData } from '../actions/stats.actions';
import { selectRouteParamsSelector } from '../selectors/global-state.selectors';

@Injectable()
export class StatsEffects {
    constructor(private actions$: Actions, private faceitApi: FaceitApiService, private store: Store<any>) { }

    public getBasicStats$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(getBasicStats),
            switchMap(action => this.faceitApi.GetBasicInfo(action.nickname).pipe(
                map((response) => getBasicStatsSuccceeded({ response }))
            ))
        )
    );

    public getBasicStatsSuccceeded$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getBasicStatsSuccceeded),
            withLatestFrom(this.store.select(selectRouteParamsSelector)),
            filter(([action]) => action.response.isEloCalculating),
            delay(10000),
            switchMap(([_, route]) => [
                getBasicStats({ nickname: route.name })
            ])
        )
    );

    public getChallangeData$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(getChallangeData),
            switchMap(() => this.faceitApi.getChallangeInfo().pipe(
                map((response) => setChallangeData({ data: response }))
            ))
        )
    );
}
