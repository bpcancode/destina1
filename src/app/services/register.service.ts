import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

    http = inject(HttpClient);


    getCountries() {
        return this.http.get(environment.baseUrl + '/api/country');
    }
}