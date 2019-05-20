import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshPaimentDetailList();
  }

  changeData(paymentDetail: PaymentDetail) {
    this.service.formData = Object.assign({}, paymentDetail);
  }

  deletePaymentDetail(id: number) { 
    if (!confirm('Are you sure?'))
      return;
    
    this.service.deletePaymentDetail(id).subscribe(
      success => {       
        this.toastr.info('Deleted successfully', 'Record deleted');
        this.service.deleteElementInList(id);
      },
      error => {
        this.toastr.error('The operation failed', 'Error');
        console.log(error);
      }
    );
  }
}
