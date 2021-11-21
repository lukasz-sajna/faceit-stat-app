import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';
import { selectFaceItDataSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo-carousel',
  templateUrl: './elo-carousel.component.html',
  styleUrls: ['./elo-carousel.component.scss']
})
export class EloCarouselComponent{
  public faceItData$: Observable<FaceItStatsResponse>;

  constructor(private store: Store<any>) {
    this.faceItData$ = this.store.select(selectFaceItDataSelector);   
  }

}
