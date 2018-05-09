import { Component, OnInit, Input } from '@angular/core';
import {Payment} from "../payments";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PaymentService } from '../payment.service';
@Component({
  selector: 'app-single-month',
  templateUrl: './single-month.component.html',
  styleUrls: ['./single-month.component.css']
})
export class SingleMonthComponent implements OnInit {

  @Input() month: Payment;

    constructor(
        private route: ActivatedRoute,
        private paymentService: PaymentService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getMonth();
    }

    getMonth(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.paymentService.getMonth(id)
            .subscribe(month => this.month = month);
    }
    goBack(): void {
        this.location.back();
    }

}
