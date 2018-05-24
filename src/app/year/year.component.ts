import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Payment} from '../payments';
import {Months} from '../arrMonth';

import {PaymentService} from '../payment.service';
import { Pipe, PipeTransform } from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

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
    year = this.todayYear;
    sumElectricity: number;
    sumGas: number;
    sumWater: number;
    sumRent: number;
    sumTotal: number;
    addPaymentVisible : boolean;
    addPaymentNextVisible : boolean;
    minYear: number;
    maxYear: number;

    constructor(private route: ActivatedRoute,
                private paymentService: PaymentService) {
    }

    getPayments(): void {

        const idYear = this.year;
        this.paymentService.getPayments(idYear).subscribe(payments => {
                this.payments = payments;
                this.checkNeedAdd();
                this.checkNeedAddNextMonth();
            }
        );
    }

    getElectricity() {

        const idYear = this.year;

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

        const idYear = this.year;

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

        const idYear = this.year;

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

        const idYear = this.year;

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

        const idYear = this.year;

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


    // refreshMinMaxYear(): void {
    //     this.paymentService.getPaymentsAll().subscribe(payments => {
    //             let paymentsAll = payments;
    //
    //             if (paymentsAll.length > 0){
    //                 var minVal = paymentsAll[0];
    //                 var maxVal = paymentsAll[0];
    //
    //                 for (let i=0; i<paymentsAll.length; i++){
    //                     // if (minVal < paymentsAll[i].year){
    //                     //     minVal = paymentsAll[i].year;
    //                     // }
    //
    //                 }
    //             }
    //         }
    //     );
    // }

    add(month: number, year: number): void {
        let lastPayment = this.payments[this.payments.length - 1];
        const newPayment = {
            month: month, year: year, saveStatus: 0,
            fixed: [{name_fixed: 'rent', payment_fixed: 2700}],
            variable: [
                {name_variable: 'electricity', current_variable: 0, prev_variable: lastPayment.variable[0].current_variable, payment_variable: 0},
                {name_variable: 'gas', current_variable: 0, prev_variable: lastPayment.variable[1].current_variable, payment_variable: 0},
                {name_variable: 'water', current_variable: 0, prev_variable: lastPayment.variable[2].current_variable, payment_variable: 0}
            ]
        };
        // this.paymentService.addPayment((newPayment) as Payment)
        //     .subscribe(payment => {
        //             this.payments.push(payment);
        //     });
        this.paymentService.addPayment((newPayment) as Payment)
            .subscribe(payment => {
                if(lastPayment.month != this.todayMonth + 1 || lastPayment.month != this.todayMonth + 2){
                    this.payments.push(payment);
                }

                this.checkNeedAdd();
                this.checkNeedAddNextMonth();
            });



    }

    checkNeedAdd(): void{
        let res = this.payments.length > 0 ? true : false;

        for(var i=0; i<this.payments.length; i++){
            if (this.payments[i].month == this.todayMonth + 1 || this.payments[i].year != this.todayYear){
                res = false;
            }
        }

        this.addPaymentVisible = res;
    }


    checkNeedAddNextMonth(): void{
        let res = this.payments.length > 0 ? true : false;

        for(var i=0; i<this.payments.length; i++){
            if (this.payments[i].month == this.todayMonth + 2 || this.payments[i].year != this.todayYear){
                res = false;
            }
        }

        this.addPaymentNextVisible = res;
    }

    changeYear() {
        this.getPayments();
        this.getMonths();
    }

    ngOnInit() {
        this.year = +this.route.snapshot.paramMap.get('year');

        this.getPayments();
        this.getMonths();
        this.getElectricity();
        this.getGas();
        this.getWater();
        this.getRent();
        this.getTotal();
    }
}