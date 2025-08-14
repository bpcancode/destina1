import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);

  public baseUrl = environment.baseUrl;
  
  get<T>(url: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${url}`, params ? { params } : {});
  }

  post<T, D>(url: string, data: D): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${url}`, data);
  }

  put<T, D>(url: string, data: D): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${url}`, data);
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.baseUrl}${url}`);
  }

}
