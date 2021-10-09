import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/enums/period.enum';
import { Balance } from 'src/app/models/balance';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrls: ['./balance-card.component.scss']
})
export class BalanceCardComponent implements OnInit {
  @Input() public balance: Balance = {} as Balance;

  constructor() { }

  ngOnInit(): void {
  }

  public get getLabel(): string {
    switch (this.balance.period) {
      case Period.Daily:
        return ' dziś'
      case Period.Weekly:
        return ' w tym tygodniu'
      case Period.Monthly:
        return ' w tym miesiącu'
      default:
        return String();
    }
  }

}
