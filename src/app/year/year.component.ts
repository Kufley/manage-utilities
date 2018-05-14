import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Payment } from '../payments';

import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
  export class YearComponent implements OnInit {

  months : Payment[];

  today = Date.now();

  constructor(
      private route: ActivatedRoute,
      private paymentService: PaymentService
  ) {}

    getPayments(): void {

      const year = +this.route.snapshot.paramMap.get('year');
      this.paymentService.getPayments(year).subscribe(months => {this.months = months;}
      );
    }
  add(name_month: string): void {
    name_month = name_month.trim();
    if (!name_month) { return; }
    this.paymentService.addPayment({ name_month } as Payment)
        .subscribe(payment => {
          this.months.push(payment);
        });
  }

  ngOnInit() {
      this.getPayments();
  }

}