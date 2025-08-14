import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  GetProductList(countryCode: string, moduleName: string) {
    console.log('API URL:', environment.API_URL);
    const params = new HttpParams()
      .set('rpt', 'GetMShoppeProducts')
      .set('cname', countryCode)
      .set('mname', moduleName);

    return this.http.get(`${environment.API_URL}shopee/productlist`, { params });
  }
  

  GetProductdetails(reportType: string, categoryId: string, productCode: string): Observable<any[]> {
  const url = `${environment.API_URL}product/productdetails/${reportType}/${categoryId}/${productCode}`;
  return this.http.get<any[]>
  (url);
}

getProductINformation(productCode: string): Observable<any> {
  const params = new HttpParams().set('pcode', productCode);
  return this.http.get(`${environment.API_URL}product/productinformation`, { params });
}
  addToCartService(payload: any): Observable<any> {
      return this.http.post(`${environment.API_URL}product/addtocart`, payload);
    }

  getcart(payload: any): Observable<any> {
      return this.http.post(`${environment.API_URL}product/getcart`, payload);
    }

  getCartbucketItems(payload: any): Observable<any> {
    return this.http.post(`${environment.API_URL}product/getmaincart`, payload);
  }
    // src/app/services/product.service.ts

// GetViewAllProducts(country: string, productCode: string, action: string): Observable<any[]> {
//   const params = new HttpParams()
//     .set('country', country)
//     .set('pcode', productCode)
//     .set('action', action);

//   return this.http.get<any[]>(`${environment.API_URL}product/viewall`, { params });
// }
// getViewAllProducts(): Observable<any[]> {
//   const params = new HttpParams()
//     .set('action', 'All')
//     .set('pcode', '0')
//     .set('countryid', 'MY');

//   return this.http.get<any[]>(`https://localhost:44322/details`, { params });
// }

}
