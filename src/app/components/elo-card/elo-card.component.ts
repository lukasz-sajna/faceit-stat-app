import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Csgo } from 'src/app/models/cs-go';
import { Elo } from 'src/app/models/elo';

@Component({
  selector: 'app-elo-card',
  templateUrl: './elo-card.component.html',
  styleUrls: ['./elo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EloCardComponent {
  @Input()
  public elo: Elo = {} as Elo;

  public get levelIcon(): string {
    return `/assets/faceit${String(this.elo.level ? this.elo.level : 1)}.svg`
  }
}
