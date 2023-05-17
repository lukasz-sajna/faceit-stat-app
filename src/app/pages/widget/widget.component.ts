import { Component } from '@angular/core';
import { Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs/operators';
import { Platform } from 'src/app/enums/platform.enum';
import { Widget } from 'src/app/enums/widget.enum';
import { getBasicStats, getEsportalStats } from 'src/app/store/actions/stats.actions';
import { selectQueryParamsSelector, selectRouteParamsSelector } from 'src/app/store/selectors/global-state.selectors';

@UntilDestroy()
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  public routeParams: Params;
  public platform: Platform | string = Platform.FaceIt;
  public widget: typeof Widget = Widget;

  constructor(private store: Store<any>) {
    this.store.select(selectRouteParamsSelector).pipe(
      untilDestroyed(this),
      withLatestFrom(this.store.select(selectQueryParamsSelector)),
      tap(([routeParams, queryParams]) => {
        this.routeParams = routeParams;
        if (queryParams.platform) {
          this.platform = String(queryParams.platform).toLowerCase();
        }

        if (this.platform === Platform.FaceIt) {
          this.store.dispatch(getBasicStats({ nickname: routeParams.name }));
        }
        else if (this.platform === Platform.Esportal) {
          this.store.dispatch(getEsportalStats({ nickname: routeParams.name }));
        }
      })
    ).subscribe();
  }

}
