
import { Component, Input } from '@angular/core';
import { Platform } from 'src/app/enums/platform.enum';
import { EsportalStats } from 'src/app/models/esportal-stats';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';

@Component({
  selector: 'app-elo-carousel-card',
  templateUrl: './elo-carousel-card.component.html',
  styleUrls: ['./elo-carousel-card.component.scss']
})
export class EloCarouselCardComponent {
  @Input()
  public data: FaceItStatsResponse | EsportalStats = {} as FaceItStatsResponse | EsportalStats;

  @Input()
  public platform: Platform | string = Platform.FaceIt;

  public get fontColor(): string {
    return this.data.eloDiff > 0 ? 'font-green' : this.data.eloDiff < 0 ? 'font-red' : 'font-neutral'
  }

  public get levelIcon(): string {
    return `/assets/${this.iconName}${String(this.data.level > 0 ? this.data.level : 1)}.svg`
  }

  private get iconName() {
    switch (this.platform) {
      case Platform.FaceIt:
        return 'faceit';
      case Platform.Esportal:
        return 'esportal';
      default:
        return 'faceit';
    }
  }

}
