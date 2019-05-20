import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  readonly rootUrl = 'http://localhost:64867/api';
  formData: PaymentDetail;
  paymentDetailList: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(`${this.rootUrl}/PaymentDetail`, this.formData);
  }

  putPaymentDetail() {
    return this.http.put(`${this.rootUrl}/PaymentDetail/${this.formData.id}`, this.formData);
  }

  deletePaymentDetail(id: number) {
    return this.http.delete(`${this.rootUrl}/PaymentDetail/${id}`);
  }

  refreshPaimentDetailList() {
    this.http.get(`${this.rootUrl}/PaymentDetail`)
      .toPromise()
      .then(result => this.paymentDetailList = result as PaymentDetail[]);
  }

  changeElementInList() {
    this.paymentDetailList.forEach((item, i) => {
      if (item.id === this.formData.id) {
        this.paymentDetailList[i] = Object.assign({}, this.formData);
        return;
      }      
    });
  }

  deleteElementInList(id: number) {
    // let index = this.paymentDetailList.findIndex(paymentDetail => paymentDetail.id === id);

    // if (index > -1)
    //   this.paymentDetailList.slice(index, 1);

    this.paymentDetailList = this.paymentDetailList.filter(paymentDetail => paymentDetail.id !== id);
  }

  addElementInList() {
    this.refreshPaimentDetailList();
  }
}
