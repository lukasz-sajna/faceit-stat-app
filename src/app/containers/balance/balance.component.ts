import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Period } from 'src/app/enums/period.enum';
import { Balance } from 'src/app/models/balance';
import { Item } from 'src/app/models/item';
import { selectQueryParamsSelector } from 'src/app/store/selectors/global-state.selectors';
import { selectMatchesSelector, selectPlayerIdSelector } from 'src/app/store/selectors/stats.selector';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {
  public balance$: Observable<Balance>;

  constructor(private store: Store<any>) {
    this.balance$ = this.store.select(selectMatchesSelector).pipe(
      withLatestFrom(this.store.select(selectQueryParamsSelector), this.store.select(selectPlayerIdSelector)),
      map(([matches, queryParams, playerId]) => ({ matches, period: queryParams.period, playerId, })),
      switchMap(data => of(this.prepareBalance(data.matches, data.playerId, data.period)))
    )
  }

  ngOnInit(): void {
  }

  public prepareBalance(matches: Item[], playerId: string, currentPeriod: Period): Balance {
    let wins = 0;
    let losses = 0;

    matches.forEach(match => {
      const winner = match.results.winner;
      const winnerTeam = winner.toLowerCase() === 'faction1' ? match.teams.faction1 : match.teams.faction2;

      winnerTeam.players.some(x => x.player_id === playerId) ? wins += 1 : losses += 1;
    });

    return { wins, losses, period: currentPeriod };
  }

}
