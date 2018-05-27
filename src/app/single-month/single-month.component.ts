import {Component, OnInit, Input} from '@angular/core';
import {Payment} from "../payments";

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {PaymentService} from '../payment.service';
import {unescapeHtml} from "@angular/platform-browser/src/browser/transfer_state";
import {variableUtilities} from "../variableUtilities";
import {fixedUtilities} from "../fixedUtilities";

@Component({
    selector: 'app-single-month',
    templateUrl: './single-month.component.html',
    styleUrls: ['./single-month.component.css']
})
export class SingleMonthComponent implements OnInit {

    @Input() payment: Payment;
    objectKeys = Object.keys;
    name: string;

    constructor(private route: ActivatedRoute,
                private paymentService: PaymentService,
                private location: Location) {
    }

    ngOnInit(): void {
        this.getPayment();
    }

    getPayment(): void {
        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year)
            .subscribe(payment => {
                this.payment = payment[0];
                console.log(this.payment);
            });
    }

    getElectricityPayment() {

        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year).subscribe(
            current => {
                this.payment.variable[0].payment_variable = (this.payment.variable[0].current_variable - this.payment.variable[0].prev_variable) * 1.50;
            }
        );
    }

    getGasPayment() {

        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year).subscribe(
            current => {
                this.payment.variable[1].payment_variable = (this.payment.variable[1].current_variable - this.payment.variable[1].prev_variable) * 1.50;
            }
        );
    }

    getWaterPayment() {

        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');
        this.paymentService.getPayment(id, year).subscribe(
            current => {
                this.payment.variable[2].payment_variable = (this.payment.variable[2].current_variable - this.payment.variable[2].prev_variable) * 1.50;
            }
        );
    }

    addUtility(name: string, index: number): void {
        if (index == 0) {
            let newUtility = new variableUtilities();
            newUtility = {name_variable: name, current_variable: 0, prev_variable: 0, payment_variable: 0};
                this.payment.variable.push(newUtility);
        } else {
            let newUtility = new fixedUtilities();
            newUtility = {name_fixed: name, payment_fixed: 0};
                this.payment.fixed.push(newUtility);
        }


        this.paymentService.updatePayment(this.payment)
            .subscribe(
               payment => {
                   console.log(payment);
                  // this.payment = payment;
                });

        this.name = '';
    }

    goBack(): void {
        this.location.back();
    }

    save(payment: Payment, saveStatus: number): void {
        this.payment.saveStatus = saveStatus;
        this.paymentService.updatePayment(this.payment).subscribe();
    }

}
