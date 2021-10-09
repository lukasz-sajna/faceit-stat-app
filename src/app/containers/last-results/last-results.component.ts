import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLastResultsSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-last-results',
  templateUrl: './last-results.component.html',
  styleUrls: ['./last-results.component.scss']
})
export class LastResultsComponent implements OnInit {
  public lastResults$: Observable<any>;

  constructor(private store: Store<any>) {
    this.lastResults$ = this.store.select(selectLastResultsSelector);
  }

  ngOnInit(): void {
  }

}
