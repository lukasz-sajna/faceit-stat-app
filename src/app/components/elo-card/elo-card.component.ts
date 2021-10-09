import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Csgo } from 'src/app/models/cs-go';

@Component({
  selector: 'app-elo-card',
  templateUrl: './elo-card.component.html',
  styleUrls: ['./elo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EloCardComponent {
  @Input()
  public csStats: Csgo = {} as Csgo;

  public get levelIcon(): string {
    return `/assets/faceit${String(this.csStats.skill_level ? this.csStats.skill_level : 1)}.svg`
  }
}
