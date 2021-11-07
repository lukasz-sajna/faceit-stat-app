import { Component, Input } from '@angular/core';
import { Elo } from 'src/app/models/elo';

@Component({
  selector: 'app-elo-diff-card',
  templateUrl: './elo-diff-card.component.html',
  styleUrls: ['./elo-diff-card.component.scss']
})
export class EloDiffCardComponent {
  @Input() public eloDiff: Elo = {} as Elo

  public get fontColor(): string {
    return this.eloDiffNumber > 0 ? 'font-green' : this.eloDiffNumber < 0 ? 'font-red' : 'font-neutral'
  }

  public get eloDiffNumber(): Number {
    if(!isNaN(this.eloDiff.eloDiff)){
      return Number(this.eloDiff.eloDiff);
    }

    return 0;
  }

}
