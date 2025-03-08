import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api_url } from '../../custom_injections/api_url';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private _HttpClient: HttpClient,
    @Inject(api_url) private apiPath: string
  ) {}
  getAllProducts(): Observable<any> {
    return this._HttpClient.get(this.apiPath + '/products');
  }
  getSpecificProducts(id: string): Observable<any> {
    return this._HttpClient.get(this.apiPath + `/products/${id}`);
  }
}
