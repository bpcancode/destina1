import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
     const payload = {
 
  "category": "all",
  "action": "GetOpendisp",
  "title": "News",
  "imgpath": "string",
  "descr": "string",
  "url": "string",
  "countryId": '1',
  "sesuer": "string",
  "sesid": "string"
};
 return this.http.post(`${environment.API_URL}news`, payload )

  }



}

