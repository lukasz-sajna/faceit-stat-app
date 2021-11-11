import { Component, Input, OnInit } from '@angular/core';
import { LatestMatchesTrend } from 'src/app/models/latest-matches-trend';

@Component({
  selector: 'app-last-results-card',
  templateUrl: './last-results-card.component.html',
  styleUrls: ['./last-results-card.component.scss']
})
export class LastResultsCardComponent implements OnInit {
  @Input() public lastResults: LatestMatchesTrend = {} as LatestMatchesTrend;
  
  constructor() { }

  ngOnInit(): void {
  }

  public get resultTrend() : string [] {
    return !!this.lastResults.simple ? [...this.lastResults.simple] : [];
  }

}
