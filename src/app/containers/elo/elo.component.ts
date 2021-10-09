import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Csgo } from 'src/app/models/cs-go';
import { selectCsGoDetailsSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo',
  templateUrl: './elo.component.html',
  styleUrls: ['./elo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EloComponent {
  public csGoDetails$: Observable<Csgo>;

  constructor(private store: Store<any>) {
    this.csGoDetails$ = this.store.select(selectCsGoDetailsSelector);
  }

}
