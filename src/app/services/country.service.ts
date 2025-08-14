import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CountryService {

  constructor(private http: HttpClient) { }

  getCountryDetails(): Observable<any> {
    return this.http.get('https://ipinfo.io?token=fd2675b165f575');
  }

  getCountryIdByShortCode(countryCode: string): Observable<any> {
   // const params = new HttpParams().set('shortCode', countryCode);
   //https://localhost:44322/GetCountryValues?shortCode=IN
    return this.http.get(`https://localhost:44322/GetCountryValues?shortCode=${countryCode}`);
  }

}
