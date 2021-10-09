import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Period } from '../enums/period.enum';
import { API_URL, BASIC_API_URL } from '../injection-tokens';
import { FaceitResponse } from '../models/faceit-response';
import { PlayerDetails } from '../models/player-details';
import { PlayerMatches } from '../models/player-matches';
import { PlayerStatsPerGame } from '../models/player-stats-per-game';

@Injectable({
  providedIn: 'root'
})
export class FaceitApiService {

  constructor(@Inject(API_URL) private apiUrl: string, @Inject(BASIC_API_URL) private basicApiUrl: string, private http: HttpClient) {
  }

  public GetPlayerDetailsFromNickname(nickname: string): Observable<PlayerDetails> {
    return this.http.get<PlayerDetails>(`${this.apiUrl}/players?nickname=${nickname}`)
  }

  public GetPlayerStats(playerId: string): Observable<any> {
    return this.http.get<PlayerStatsPerGame>(`${this.apiUrl}/players/${playerId}/stats/csgo`)
  }

  public GetPlayerMatchHistory(playerId: string, period: Period): Observable<PlayerMatches> {
    let timeFrom = 0;
    const now = new Date();

    switch (period) {
      case Period.Daily:
        timeFrom = this.calculateTimeStamp(now);
        break;
      case Period.Weekly:
        console.log('weekly');
        timeFrom = this.calculateTimeStamp(new Date(now.getUTCFullYear(), now.getUTCMonth(), this.getMonday(now).getUTCDate()));
        break;
      case Period.Monthly:
        console.log('monthly');
        timeFrom = this.calculateTimeStamp(new Date(now.getUTCFullYear(), now.getUTCMonth(), 1));
        break;
    }

    return this.http.get<PlayerMatches>(`${this.apiUrl}/players/${playerId}/history?game=csgo&from=${String(timeFrom)}&limit=100`);
  }

  public GetBasicInfo(nickname: string): Observable<FaceitResponse> {
    return this.http.get<FaceitResponse>(`${this.basicApiUrl}/faceit?nick=${nickname}&game=csgo`);
  }

  private getMonday(today: Date): Date {
    today = new Date(today);
    let day = today.getDay(),
      diff = today.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(today.setDate(diff));
  }

  private calculateTimeStamp(date: Date): number {
    date = new Date(date);
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())).getTime() / 1000;
  }
}