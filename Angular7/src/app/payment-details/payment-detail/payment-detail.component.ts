import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {  
    if (form != null)
      form.resetForm();

    this.service.formData = {
      id: 0,
      cardOwnerName: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    };
  }

  onSubmit(form: NgForm) {
    this.service.postPaymentDetail(form.value).subscribe(
      success => {
        this.resetForm(form);
      },
      error => {
        console.log(error);
      }
    );
  }
}
