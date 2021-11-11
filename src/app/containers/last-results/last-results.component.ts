import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LatestMatchesTrend } from 'src/app/models/latest-matches-trend';
import { selectLastResultsSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-last-results',
  templateUrl: './last-results.component.html',
  styleUrls: ['./last-results.component.scss']
})
export class LastResultsComponent implements OnInit {
  public lastResults$: Observable<LatestMatchesTrend>;

  constructor(private store: Store<any>) {
    this.lastResults$ = this.store.select(selectLastResultsSelector);
  }

  ngOnInit(): void {
  }

}
