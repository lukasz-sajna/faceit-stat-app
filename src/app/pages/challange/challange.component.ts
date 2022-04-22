import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { selectQueryParamsSelector } from 'src/app/store/selectors/global-state.selectors';

@UntilDestroy()
@Component({
  selector: 'app-challange',
  templateUrl: './challange.component.html',
  styleUrls: ['./challange.component.css']
})
export class ChallangeComponent implements OnInit {
  public challange: any;

  constructor(private store: Store<any>) {
    this.store.select(selectQueryParamsSelector).pipe(
      untilDestroyed(this),
      tap((queryParams) => {
        this.challange = queryParams;
      })
    ).subscribe();
  }
  ngOnInit(): void {
  }

  public get rankImage(): string {
    return `/assets/ranks/matchmaking${this.challange.rank}.png`
  }

}
