import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  readonly rootUrl = 'http://localhost:64867/api';
  formData: PaymentDetail;

  constructor(private http: HttpClient) { }

  postPaymentDetail(formData: PaymentDetail) {
    return this.http.post(`${this.rootUrl}/PaymentDetail`, formData);
  }
}
