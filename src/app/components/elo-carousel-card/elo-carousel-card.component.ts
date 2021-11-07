import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChildren } from '@angular/core';
import { Elo } from 'src/app/models/elo';

@Component({
  selector: 'app-elo-carousel-card',
  templateUrl: './elo-carousel-card.component.html',
  styleUrls: ['./elo-carousel-card.component.scss']
})
export class EloCarouselCardComponent implements AfterViewInit{
  @Input()
  public elo: Elo = {} as Elo;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    
  }

  public ngAfterViewInit(): void  {
    const btnElement = (<HTMLElement>this.el.nativeElement)
      .querySelectorAll('.sr-only');

    btnElement.forEach(x => {
      x.remove()
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
