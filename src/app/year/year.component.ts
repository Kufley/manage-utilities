import { Component, OnInit } from '@angular/core';

import { Payment } from '../payments';
import { PAYMENTS } from '../mock-payments';

import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
  export class YearComponent implements OnInit {

  months : Payment[];

    constructor(private paymentService: PaymentService) { }

    getPayments(): void {
        this.paymentService.getPayments()
            .subscribe(months => this.months = months);
    }
  ngOnInit() {
      this.getPayments();
  }

}