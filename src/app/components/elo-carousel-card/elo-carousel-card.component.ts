import { Component, Input } from '@angular/core';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';

@Component({
  selector: 'app-elo-carousel-card',
  templateUrl: './elo-carousel-card.component.html',
  styleUrls: ['./elo-carousel-card.component.scss']
})
export class EloCarouselCardComponent{
  @Input()
  public data: FaceItStatsResponse = {} as FaceItStatsResponse;

  public get fontColor(): string {
    return this.data.eloDiff > 0 ? 'font-green' : this.data.eloDiff < 0 ? 'font-red' : 'font-neutral'
  }

  public get levelIcon(): string {
    return `/assets/faceit${String(this.data.level > 0 ? this.data.level : 1)}.svg`
  }

}
