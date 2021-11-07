import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Widget } from 'src/app/enums/widget.enum';
import { QueryParams } from 'src/app/models/query-params';
import { getBasicStats } from 'src/app/store/actions/stats.actions';
import { selectMappedQueryParamsSelector, selectRouteParamsSelector } from 'src/app/store/selectors/global-state.selectors';

@UntilDestroy()
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  public queryParams: QueryParams = {} as QueryParams;
  public widget: typeof Widget = Widget;

  constructor(private store: Store<any>) {
    this.store.select(selectRouteParamsSelector).pipe(
      untilDestroyed(this),
      withLatestFrom(this.store.select(selectMappedQueryParamsSelector)),
      tap(([routeParams, queryParams]) => {
        this.queryParams = queryParams;
      }),
      switchMap(([routeParams, queryParams]) => timer(0, queryParams.refreshRate * 1000).pipe(
        tap(() => {
          // this.store.dispatch(getPlayerDetails({ nickname: routeParams.name }));
          this.store.dispatch(getBasicStats({nickname: routeParams.name}));
        }
        )
      )
      )).subscribe();
  }

}
