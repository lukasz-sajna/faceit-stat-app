import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { EloDiff } from 'src/app/models/elo-diff';
import { selectMappedQueryParamsSelector } from 'src/app/store/selectors/global-state.selectors';
import { selectEloDiffSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo-diff',
  templateUrl: './elo-diff.component.html',
  styleUrls: ['./elo-diff.component.scss']
})
export class EloDiffComponent implements OnInit {
  public eloDiff$: Observable<EloDiff>;


  constructor(private store: Store<any>) {
    this.eloDiff$ = this.store.select(selectEloDiffSelector).pipe(
      withLatestFrom(this.store.select(selectMappedQueryParamsSelector)),
      switchMap(([eloDiff, queryParams]) => of({eloDiff, period: queryParams.period} as EloDiff))
    )
  }

  ngOnInit(): void {
  }

}
