
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Platform } from 'src/app/enums/platform.enum';
import { EsportalStats } from 'src/app/models/esportal-stats';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';
import { selectEsportalDataSelector, selectFaceItDataSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo-carousel',
  templateUrl: './elo-carousel.component.html',
  styleUrls: ['./elo-carousel.component.scss']
})
export class EloCarouselComponent {
  @Input()
  public platform: Platform | string = Platform.FaceIt;

  public data$: Observable<FaceItStatsResponse | EsportalStats>;

  constructor(private store: Store<any>) {
    if (this.platform === Platform.FaceIt) {
      this.data$ = this.store.select(selectFaceItDataSelector);
    }
    else if (this.platform === Platform.Esportal) {
      this.data$ = this.store.select(selectEsportalDataSelector);
    }
  }

}
