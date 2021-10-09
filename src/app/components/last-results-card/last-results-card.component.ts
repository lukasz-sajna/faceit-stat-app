import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-results-card',
  templateUrl: './last-results-card.component.html',
  styleUrls: ['./last-results-card.component.scss']
})
export class LastResultsCardComponent implements OnInit {
  @Input() public lastResults: String[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
