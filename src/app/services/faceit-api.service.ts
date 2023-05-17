import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL, BASIC_API_URL } from '../injection-tokens';
import { ChallangeStats } from '../models/challange-stats';
import { EsportalStats } from '../models/esportal-stats';
import { FaceItStatsResponse } from '../models/face-it-stats-response';

@Injectable({
  providedIn: 'root'
})
export class FaceitApiService {

  constructor(@Inject(API_URL) private apiUrl: string, @Inject(BASIC_API_URL) private basicApiUrl: string, private http: HttpClient) {
  }

  public GetBasicInfo(nickname: string): Observable<FaceItStatsResponse> {
    return this.http.get<FaceItStatsResponse>(`${this.basicApiUrl}/Stats/GetStats?nickname=${nickname}`);
  }

  public getChallangeInfo(): Observable<ChallangeStats> {
    return this.http.get<ChallangeStats>(`${this.basicApiUrl}/challange`);
  }

  public GetEsportalInfo(nickname: string): Observable<EsportalStats> {
    return this.http.get<EsportalStats>(`${this.basicApiUrl}/Stats/GetEsportalStats?nickname=${nickname}`);
  }
}