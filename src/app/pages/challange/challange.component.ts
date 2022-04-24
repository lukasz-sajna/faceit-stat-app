import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ChallangeStats } from 'src/app/models/challange-stats';
import { getChallangeData } from 'src/app/store/actions/stats.actions';
import { selectChallangeData } from 'src/app/store/selectors/stats.selector';

@UntilDestroy()
@Component({
  selector: 'app-challange',
  templateUrl: './challange.component.html',
  styleUrls: ['./challange.component.css']
})
export class ChallangeComponent implements OnInit {
  public challangeData$: Observable<ChallangeStats> = new Observable();

  constructor(private store: Store<any>) {
    this.challangeData$ = this.store.select(selectChallangeData);
  }
  ngOnInit(): void {
    this.store.dispatch(getChallangeData());
  }

  public getRankImage(rank: number): string {
    return `/assets/ranks/matchmaking${rank}.png`
  }

}
