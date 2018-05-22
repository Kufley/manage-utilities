import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Payment } from '../payments';
import { Months } from '../arrMonth';

import { PaymentService } from '../payment.service';

@Component({
    selector: 'app-year',
    templateUrl: './year.component.html',
    styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

    payments:Payment[];
    months:Months[];

    today = Date.now();
    todayMonth = new Date().getMonth();
    todayYear = new Date().getFullYear();
    year = new Date().getFullYear();


    getYear():void {
        const idYear = +this.route.snapshot.paramMap.get('year');
        console.log(idYear);
    }


    constructor(private route:ActivatedRoute,
                private paymentService:PaymentService) {
    }

    getPayments():void {

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
                let sum = 0;

                for (let i = 0; i <= this.payments.length - 1; i++) {
                    sum += this.payments[i].variable[0].payment_variable;
                }
            }
        );


    }

    getMonths():void {
        this.paymentService.getMonths().subscribe(months => {
                this.months = months;
            }
        );
    }

    add(id:number, year:number):void {
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


    }

    changePaymentStatus(month:number) {

        for (let i = 0; i <= this.months.length - 1; i++) {
            if (this.months[i].idMonth == month) {
                console.log(this.months[i].paymentStatus);
                this.months[i].paymentStatus = true;
                this.paymentService.updateMonth(this.months[i]).subscribe(update => this.months[i].paymentStatus = update);

                console.log(this.months[i].paymentStatus);
            }
        }
    }

    checkActive(monthId:number):boolean {
        let res = false;
        for (let i = 0; i <= this.months.length; i++) {
            if (this.payments[i].month == monthId || this.payments[i].year == this.todayYear) {
                res = true;
            }
            console.log(res);
        }

        return res;
    }

    changeYear() {
        this.getPayments();
        this.getMonths();
    }

    ngOnInit() {
        this.getPayments();
        this.getMonths();
        this.getElectricity();

    }

}