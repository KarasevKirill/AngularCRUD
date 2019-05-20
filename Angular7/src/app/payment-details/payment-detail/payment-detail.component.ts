import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr: ToastrService) { }

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
    if (this.service.formData.id == 0)
      this.addNewRecord(form);
    else
      this.saveChangeRecord(form);
  }

  addNewRecord(form: NgForm) {
    this.service.postPaymentDetail().subscribe(
      success => {       
        this.toastr.success('Saved successfully', 'Payment detail added');
        this.service.addElementInList();
        this.resetForm(form);
      },
      error => {
        this.toastr.error('The operation failed', 'Error');
        console.log(error);
      }
    );
  }

  saveChangeRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      success => {       
        this.toastr.success('Changed successfully', 'Record changed');
        this.service.changeElementInList();
        this.resetForm(form);
      },
      error => {
        this.toastr.error('The operation failed', 'Error');
        console.log(error);
      }
    );
  }
}
