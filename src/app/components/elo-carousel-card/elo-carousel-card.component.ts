import { Component, Input } from '@angular/core';
import { Elo } from 'src/app/models/elo';
import { LatestMatchesTrend } from 'src/app/models/latest-matches-trend';

@Component({
  selector: 'app-elo-carousel-card',
  templateUrl: './elo-carousel-card.component.html',
  styleUrls: ['./elo-carousel-card.component.scss']
})
export class EloCarouselCardComponent{
  @Input()
  public elo: Elo = {} as Elo;

  @Input() public lastResults: LatestMatchesTrend = {} as LatestMatchesTrend;

  public get convertedResults(): {result: string; elo: string}[]{
    const splitterResults = !!this.lastResults && !!this.lastResults.extended ? this.lastResults.extended.split('|'): [] as String[];
    splitterResults.forEach((_, index) => {
      splitterResults[index] = splitterResults[index].trim();
    });

    return splitterResults.map(result => {
      const splitedResult = result.split(' ');
      return {result: splitedResult[0], elo: splitedResult[1]}
    });
  }

  public get fontColor(): string {
    return this.eloDiffNumber > 0 ? 'font-green' : this.eloDiffNumber < 0 ? 'font-red' : 'font-neutral'
  }

  public get eloDiffNumber(): Number {
    if(!isNaN(this.elo.eloDiff)){
      return Number(this.elo.eloDiff);
    }

    return 0;
  }

  public get levelIcon(): string {
    return `/assets/faceit${String(this.elo.level ? this.elo.level : 1)}.svg`
  }

}
