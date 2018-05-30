import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Payment} from '../payments';
import {PaymentService} from '../payment.service';
import {Pipe, PipeTransform} from '@angular/core';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-year',
    templateUrl: './year.component.html',
    styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

    payments: Payment[];
    todayMonth = new Date().getMonth();
    todayYear = new Date().getFullYear();
    year = this.todayYear;
    addPaymentVisible: boolean;
    addPaymentPrevVisible: boolean;
    sumYear:number;
    myArray = new Array(0);

    constructor(private route: ActivatedRoute,
                private paymentService: PaymentService) {
    }

    getPayments(): void {

        const idYear = this.year;


        this.paymentService.getPayments(idYear).subscribe(payments => {
                this.payments = payments;
                this.checkNeedAdd();
                this.checkNeedAddPrevMonth();
                this.getTotal();
                this.getTotalYear();

            }
        );
    }
    getTotalYear(){
        const idYear = this.year;
        this.paymentService.getPayments(idYear).subscribe(payments => {
            this.payments = payments;
            let sumYear = 0;
            for (let i = 0; i < payments.length; i++) {
                sumYear += this.payments[i].total;
            }
            this.sumYear = sumYear;
        }

    );

    }
    getTotal() {
        const idYear = this.year;

        this.paymentService.getPayments(idYear).subscribe(
            payments => {
                this.payments = payments;
                let arr = new Array();
                for (let i = 0; i < payments.length; i++) {

                    for (let j = 0; j < payments[i].variable.length; j++) {
                        let name = payments[i].variable[j].name_variable;
                        let val = payments[i].variable[j].payment_variable;

                        let finded = true;
                        for (let n = 0; n < arr.length; n++) {
                            if (arr[n].name === name) {
                                arr[n].value += val;
                                finded = false;
                                break;
                            }
                        }
                        if(finded == true){
                           arr.push({name: name, value: val});
                        }

                    }

                    for (let j = 0; j < payments[i].fixed.length; j++) {
                        let name = payments[i].fixed[j].name_fixed;
                        let val = payments[i].fixed[j].payment_fixed;

                        let finded = true;
                        for (let n = 0; n < arr.length; n++) {
                            if (arr[n].name === name) {
                                arr[n].value += val;
                                finded = false;
                                break;
                            }
                        }
                        if(finded == true){
                            arr.push({name: name, value: val});
                        }
                    }
                }

                 this.myArray = arr;
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
    sort(payments: Payment[]) {
        return payments.sort((a, b) => {
            return a.month - b.month;
        });
    }
    add(month: number, year: number): void {

        let lastPayment = this.payments[this.payments.length - 1];
        let fixedUtilities = new Array(0);
        let variableUtilities = new Array(0);
        for (let i = 0; i < lastPayment.fixed.length; i++) {
            var fixedUtilitie =
            {name_fixed: lastPayment.fixed[i].name_fixed, payment_fixed: lastPayment.fixed[i].payment_fixed};

            fixedUtilities.push(fixedUtilitie);


        }

        for (let j = 0; j < lastPayment.variable.length; j++) {
            var variableUtilitie = { name_variable: lastPayment.variable[j].name_variable,
                current_variable: lastPayment.variable[j].current_variable,
                prev_variable: lastPayment.variable[j].current_variable,
                payment_variable: 0,
                coof: lastPayment.variable[j].coof};

            variableUtilities.push(variableUtilitie);

        }

        const newPayment = {
            month: month, year: year, saveStatus: 0, total: 0,
            fixed: fixedUtilities,
            variable: variableUtilities
        };

        this.paymentService.addPayment((newPayment) as Payment)
            .subscribe(payment => {
                if (lastPayment.month != this.todayMonth + 1 || lastPayment.month != this.todayMonth + 2) {
                    this.payments.push(payment);
                    this.payments = this.sort(this.payments);
                }
                this.checkNeedAdd();
                this.checkNeedAddPrevMonth();
            });


    }

    checkNeedAdd(): void {
        let res = this.payments.length > 0 ? true : false;

        for (var i = 0; i < this.payments.length; i++) {
            if (this.payments[i].month == this.todayMonth + 1 || this.payments[i].year != this.todayYear) {
                res = false;
            }
        }

        this.addPaymentVisible = res;
    }


    checkNeedAddPrevMonth(): void {
        let res = this.payments.length > 0 ? true : false;

        for (var i = 0; i < this.payments.length; i++) {
            if (this.payments[i].month == this.todayMonth || this.payments[i].year != this.todayYear) {
                res = false;
            }
        }

        this.addPaymentPrevVisible = res;
    }


    changeYear() {
        this.getPayments();
    }

    ngOnInit() {
        this.year = +this.route.snapshot.paramMap.get('year');
        this.getPayments();
        this.getTotal();
        this.getTotalYear();

    }
}