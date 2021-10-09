import { Component, Input, OnInit } from '@angular/core';
import { Period } from 'src/app/enums/period.enum';
import { EloDiff } from 'src/app/models/elo-diff';

@Component({
  selector: 'app-elo-diff-card',
  templateUrl: './elo-diff-card.component.html',
  styleUrls: ['./elo-diff-card.component.scss']
})
export class EloDiffCardComponent implements OnInit {
  @Input() public eloDiff: EloDiff = { } as EloDiff

  constructor() { }

  ngOnInit(): void {
  }

  public get getLabel(): string {
    switch (this.eloDiff.period) {
      case Period.Daily:
        return ' DZIŚ'
      case Period.Weekly:
        return ' w tym tygodniu'
      case Period.Monthly:
        return ' w tym miesiącu'
      default:
        return String();
    }
  }

  public get fontColor(): string {
    return this.eloDiff.eloDiff > 0 ? './font-green' : this.eloDiff.eloDiff < 0 ? './font-red' : './font-neutral'
  }

}
