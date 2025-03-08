import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../enviroments/environment';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllbrands(): Observable<any> {
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/brands`);
  }
}
