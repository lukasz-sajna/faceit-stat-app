import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { FaceItStatsResponse } from 'src/app/models/face-it-stats-response';

@Component({
  selector: 'app-elo-carousel-card',
  templateUrl: './elo-carousel-card.component.html',
  styleUrls: ['./elo-carousel-card.component.scss']
})
export class EloCarouselCardComponent implements AfterViewInit {
  @Input()
  public data: FaceItStatsResponse = {} as FaceItStatsResponse;

  @ViewChild('widgetCarousel', { static: true }) carousel: NgbCarousel;

  ngAfterViewInit(): void {
    this.carousel.pause();
  }

  public get fontColor(): string {
    return this.data.eloDiff > 0 ? 'font-green' : this.data.eloDiff < 0 ? 'font-red' : 'font-neutral'
  }

  public get levelIcon(): string {
    return `/assets/faceit${String(this.data.level > 0 ? this.data.level : 1)}.svg`
  }

  public slide(event: NgbSlideEvent) {
    console.log(event);

    if (event.current == 'ngb-slide-2' && this.data.currentMatchElo.gain == 0 && this.data.currentMatchElo.loss == 0) {
      console.log('in')
      console.log(this.carousel);
      this.carousel.next(NgbSlideEventSource.TIMER);
      this.carousel.next(NgbSlideEventSource.TIMER);
    }
  }

  public next() {
    this.carousel.next(NgbSlideEventSource.TIMER);
  }

}
function ngAfterViewInit() {
  throw new Error('Function not implemented.');
}

