import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private httpClient: HttpClient) { }


  public getFakeProducts(): Observable<any>{
    const url = `${environment.apiUrl}products`;
    return this.httpClient.get(url);
  }

  public getFakeProductDetail(productId: number): Observable<any>{
    const url = `${environment.apiUrl}products/${productId}`;
    return this.httpClient.get(url);
  }

}
