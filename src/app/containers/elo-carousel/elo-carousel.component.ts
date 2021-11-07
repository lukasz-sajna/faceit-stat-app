import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Elo } from 'src/app/models/elo';
import { selectBasicDataSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo-carousel',
  templateUrl: './elo-carousel.component.html',
  styleUrls: ['./elo-carousel.component.scss']
})
export class EloCarouselComponent{
  public csGoDetails$: Observable<Elo>;

  constructor(private store: Store<any>) {
    this.csGoDetails$ = this.store.select(selectBasicDataSelector);
  }

}
