import { User } from './../../../shared/interfaces/iorder';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private readonly baseUrl = environment.baseUrl;
  private readonly myToken = localStorage.getItem('userToken');

  constructor(private _HttpClient: HttpClient) {}

  getUserOrder(id: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/api/v1/orders/user/${id}`, {
      headers: {
        token: this.myToken!,
      },
      params: {
        populate: 'cartItems.product',
      },
    });
  }
  checkOutSession(id: string, data: object): Observable<any> {
    return this._HttpClient.post(
      environment.baseUrl +
        `/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      {
        shippingAddress: data,
      },
      {
        headers: {
          token: this.myToken!,
        },
      }
    );
  }
}
