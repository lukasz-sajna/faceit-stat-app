import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Elo } from 'src/app/models/elo';
import { selectBasicDataSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo',
  templateUrl: './elo.component.html',
  styleUrls: ['./elo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EloComponent {
  public csGoDetails$: Observable<Elo>;

  constructor(private store: Store<any>) {
    this.csGoDetails$ = this.store.select(selectBasicDataSelector);
  }

}
