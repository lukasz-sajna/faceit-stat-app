import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Elo } from 'src/app/models/elo';
import { LatestMatchesTrend } from 'src/app/models/latest-matches-trend';
import { selectBasicDataSelector, selectLastResultsSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo-carousel',
  templateUrl: './elo-carousel.component.html',
  styleUrls: ['./elo-carousel.component.scss']
})
export class EloCarouselComponent{
  public csGoDetails$: Observable<Elo>;
  public lastResults$: Observable<LatestMatchesTrend>;

  constructor(private store: Store<any>) {
    this.csGoDetails$ = this.store.select(selectBasicDataSelector);    
    this.lastResults$ = this.store.select(selectLastResultsSelector);
  }

}
