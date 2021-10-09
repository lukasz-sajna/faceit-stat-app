import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Period } from '../enums/period.enum';
import { LOCAL_API_URL } from '../injection-tokens';

@Injectable({
  providedIn: 'root'
})
export class LocalApiService {

  constructor(@Inject(LOCAL_API_URL) private apiUrl: string, private http: HttpClient) { }

  public GetEloDiffForPeriod(period: Period): Observable<number> {
    const periodInt = period === Period.Daily ? 0 : period === Period.Weekly ? 1 : 0;
    return this.http.get<number>(`${this.apiUrl}/Obs/GetEloDiff?period=${periodInt}`)
  }
}
