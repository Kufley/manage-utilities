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

    getGasPayment() {

        const id = +this.route.snapshot.paramMap.get('id');
        this.paymentService.getMonth(id).subscribe(
        current => {this.month.variable[0].payment_variable = (this.month.variable[0].current_variable - this.month.variable[0].prev_variable) * 1.50; }
        );
    }
    getElectricityPayment() {

        const id = +this.route.snapshot.paramMap.get('id');
        this.paymentService.getMonth(id).subscribe(
            current => {this.month.variable[1].payment_variable = (this.month.variable[1].current_variable - this.month.variable[1].prev_variable) * 1.50; }

        );
    }

    getWaterPayment() {

        const id = +this.route.snapshot.paramMap.get('id');
        this.paymentService.getMonth(id).subscribe(
            current => {this.month.variable[2].payment_variable = (this.month.variable[3].current_variable - this.month.variable[4].prev_variable) * 1.50; }

        );
    }


    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.paymentService.updateMonth(this.month)
            .subscribe(() => this.save());
    }




}
