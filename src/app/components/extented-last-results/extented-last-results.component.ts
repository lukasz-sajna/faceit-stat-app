import { Component, Input, OnInit } from '@angular/core';
import { LatestMatchesTrend } from 'src/app/models/latest-matches-trend';

@Component({
  selector: 'app-extented-last-results',
  templateUrl: './extented-last-results.component.html',
  styleUrls: ['./extented-last-results.component.scss']
})
export class ExtentedLastResultsComponent implements OnInit {
  @Input() public lastResults: LatestMatchesTrend = {} as LatestMatchesTrend;

  constructor() { }

  ngOnInit(): void {
  }

  public get convertedResults(): {result: string; elo: string}[]{
    const splitterResults = !!this.lastResults.extended ? this.lastResults.extended.split('|'): [] as String[];
    splitterResults.forEach((_, index) => {
      splitterResults[index] = splitterResults[index].trim();
    });

    return splitterResults.map(result => {
      const splitedResult = result.split(' ');
      return {result: splitedResult[0], elo: splitedResult[1]}
    });
  }

  public contains(input: string, check: string){
    return input.includes(check)
  }

}
