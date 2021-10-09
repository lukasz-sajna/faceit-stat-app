import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Elo } from 'src/app/models/elo';
import { selectBasicDataSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-elo-diff',
  templateUrl: './elo-diff.component.html',
  styleUrls: ['./elo-diff.component.scss']
})
export class EloDiffComponent {
  public eloDiff$: Observable<Elo>;

  constructor(private store: Store<any>) {
    this.eloDiff$ = this.store.select(selectBasicDataSelector);
  }

}
