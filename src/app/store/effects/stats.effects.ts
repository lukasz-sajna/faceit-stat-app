import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { FaceitApiService } from 'src/app/services/faceit-api.service';
import { getBasicStats, getBasicStatsSuccceeded, getEloDiff, getEloDiffSucceeded, getPlayerDetails, getPlayerDetailsSucceeded, getPlayerMatches, getPlayerMatchesSucceeded, getPlayerStats, getPlayerStatsSucceeded } from '../actions/stats.actions';
import { selectQueryParamsSelector } from '../selectors/global-state.selectors';

@Injectable()
export class StatsEffects {
    constructor(private actions$: Actions, private faceitApi: FaceitApiService, private store: Store<any>) { }

    public getPlayerDetails$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(getPlayerDetails),
            switchMap(action => this.faceitApi.GetPlayerDetailsFromNickname(action.nickname).pipe(
                map((response) => getPlayerDetailsSucceeded({ playerDetails: response }))
            ))
        )
    );

    public getPlayerDetailsSucceeded$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPlayerDetailsSucceeded),
            switchMap(action => [
                getPlayerStats({ playerId: action.playerDetails.player_id }),
                getPlayerMatches({ playerId: action.playerDetails.player_id }),
                getEloDiff()
            ])
        )
    );

    public getPlayerStats$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(getPlayerStats),
            switchMap(action => this.faceitApi.GetPlayerStats(action.playerId).pipe(
                map((response) => getPlayerStatsSucceeded({ playerStats: response }))
            ))
        )
    );

    public getPlayerMatches$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(getPlayerMatches),
            withLatestFrom(this.store.select(selectQueryParamsSelector)),
            switchMap(([action, queryParams]) => this.faceitApi.GetPlayerMatchHistory(action.playerId, queryParams.period).pipe(
                map((response) => getPlayerMatchesSucceeded({ matches: response }))
            ))
        )
    );

    public getBasicStats$: Observable<any> = createEffect(() =>
        this.actions$.pipe(
            ofType(getBasicStats),
            switchMap(action => this.faceitApi.GetBasicInfo(action.nickname).pipe(
                map((response) => getBasicStatsSuccceeded({ response }))
            ))
        )
    );

    // public getBasicStatsSuccceeded$: Observable<any> = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(getBasicStatsSuccceeded),
    //         switchMap(() => this.faceitApi.GetEsea().pipe(
    //             tap((response) => console.log(response))
    //         ))
    //     ), {dispatch: false}
    // );
}
