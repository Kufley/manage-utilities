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

  @Input() payment: Payment;

    constructor(
        private route: ActivatedRoute,
        private paymentService: PaymentService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getPayment();
    }

    getPayment(): void {
        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year)
            .subscribe(payment => {this.payment = payment[0];});
    }

    getElectricityPayment() {

        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year).subscribe(
        current => {this.payment.variable[0].payment_variable = (this.payment.variable[0].current_variable - this.payment.variable[0].prev_variable) * 1.50; }
        );
    }
    getGasPayment() {

        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year).subscribe(
            current => {this.payment.variable[1].payment_variable = (this.payment.variable[1].current_variable - this.payment.variable[1].prev_variable) * 1.50; }

        );
    }

    getWaterPayment() {

        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');
        this.paymentService.getPayment(id, year).subscribe(
            current => {this.payment.variable[2].payment_variable = (this.payment.variable[2].current_variable - this.payment.variable[2].prev_variable) * 1.50; }

        );
    }


    goBack(): void {
        this.location.back();
    }

    save(payment: Payment, saveStatus: number): void {
        this.payment=payment;
        this.payment.saveStatus = saveStatus;
        //console.log(this.payment);
        this.paymentService.updatePayment(payment).subscribe();
    }




}
