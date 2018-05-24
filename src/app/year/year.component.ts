import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Payment} from '../payments';
import {Months} from '../arrMonth';

import {PaymentService} from '../payment.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
    selector: 'app-year',
    templateUrl: './year.component.html',
    styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

    payments: Payment[];
    months: Months[];

    today = Date.now();
    todayMonth = new Date().getMonth();
    todayYear = new Date().getFullYear();
    year = new Date().getFullYear();
    sumElectricity: number;
    sumGas: number;
    sumWater: number;
    sumRent: number;
    sumTotal: number;
    checkYear: number;
    res: boolean;
    lastPayment: number;





    getYear(): void {
        const idYear = +this.route.snapshot.paramMap.get('year');

    }


    constructor(private route: ActivatedRoute,
                private paymentService: PaymentService) {
    }

    getPayments(): void {

        const idYear = +this.route.snapshot.paramMap.get('year');
        this.paymentService.getPayments(idYear).subscribe(payments => {
                this.payments = payments;
            }
        );
    }

    getElectricity() {

        const idYear = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayments(idYear).subscribe(
            payments => {
                this.payments = payments;
                let sumElectricity = 0;

                for (let i = 0; i <= this.payments.length - 1; i++) {
                    sumElectricity += this.payments[i].variable[0].payment_variable;
                }

                this.sumElectricity = sumElectricity;
            }
        );


    }

    getGas() {

        const idYear = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayments(idYear).subscribe(
            payments => {
                this.payments = payments;
                let sumGas = 0;

                for (let i = 0; i <= this.payments.length - 1; i++) {
                    sumGas += this.payments[i].variable[1].payment_variable;
                }

                this.sumGas = sumGas;
            }
        );


    }

    getWater() {

        const idYear = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayments(idYear).subscribe(
            payments => {
                this.payments = payments;
                let sumWater = 0;

                for (let i = 0; i <= this.payments.length - 1; i++) {
                    sumWater += this.payments[i].variable[2].payment_variable;
                }

                this.sumWater = sumWater;
            }
        );


    }

    getRent() {

        const idYear = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayments(idYear).subscribe(
            payments => {
                this.payments = payments;
                let sumRent = 0;

                for (let i = 0; i <= this.payments.length - 1; i++) {
                    sumRent += this.payments[i].fixed[0].payment_fixed;
                }

                this.sumRent = sumRent;
            }
        );


    }

    getTotal() {

        const idYear = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayments(idYear).subscribe(
            payments => {
                this.payments = payments;
                let sumTotal = 0;

                for (let i = 0; i <= this.payments.length - 1; i++) {
                    sumTotal += this.payments[i].fixed[0].payment_fixed +
                                this.payments[i].variable[2].payment_variable +
                                this.payments[i].variable[1].payment_variable +
                                this.payments[i].variable[0].payment_variable;
                }

                this.sumTotal = sumTotal;
            }
        );


    }

    getMonths(): void {
        this.paymentService.getMonths().subscribe(months => {
                this.months = months;
            }
        );
    }

    add(id: number, year: number): void {
        const newPayment = {
            month: id, year: year, saveStatus: 0,
            fixed: [{name_fixed: 'rent', payment_fixed: 0}],
            variable: [
                {name_variable: 'electricity', current_variable: 0, prev_variable: 0, payment_variable: 0},
                {name_variable: 'gas', current_variable: 0, prev_variable: 0, payment_variable: 0},
                {name_variable: 'water', current_variable: 0, prev_variable: 0, payment_variable: 0}
            ]
        };
        this.paymentService.addPayment((newPayment) as Payment)
            .subscribe(payment => {
                    this.payments.push(payment);
            });
        //this.paymentService.addPayment((newPayment) as Payment)
        //    .subscribe(payment => {
        //        let lastPayment = this.payments[this.payments.length - 1];
        //        console.log(lastPayment.month);
        //        if(lastPayment.month != this.todayMonth + 1){
        //            this.payments.push(payment);
        //            this.lastPayment = 1;
        //        }  else {
        //            this.lastPayment = 0;
        //        }
        //
        //    });



    }

    //changePaymentStatus(month: number) {
    //
    //    for (let i = 0; i <= this.months.length - 1; i++) {
    //        if (this.months[i].idMonth == month) {
    //            this.months[i].paymentStatus = true;
    //            this.paymentService.updateMonth(this.months[i]).subscribe(update => this.months[i].paymentStatus = update);
    //
    //        }
    //    }
    //}
    //
    //checkActive(monthId: number): void {
    //    let res;
    //    for (let i = 0; i <= this.payments.length - 1; i++) {
    //        if (this.payments[i].month == monthId || this.payments[i].year == this.todayYear) {
    //            res = this.payments[i].saveStatus;
    //
    //        }
    //        this.res = res;
    //
    //        //console.log(checkYear);
    //    }
    //
    //
    //}

    changeYear() {
        this.getPayments();
        this.getMonths();
    }

    ngOnInit() {
        this.getPayments();
        this.getMonths();
        this.getElectricity();
        this.getGas();
        this.getWater();
        this.getRent();
        this.getTotal();

    }

}