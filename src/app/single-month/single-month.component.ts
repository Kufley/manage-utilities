import { Component, OnInit, Input } from '@angular/core';
import {Payment} from "../payments";

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PaymentService } from '../payment.service';
import {Months} from "../arrMonth";

@Component({
  selector: 'app-single-month',
  templateUrl: './single-month.component.html',
  styleUrls: ['./single-month.component.css']
})
export class SingleMonthComponent implements OnInit {

  @Input() payment: Payment;
  @Input() month: Months;
  payments : Payment[];

    constructor(
        private route: ActivatedRoute,
        private paymentService: PaymentService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getPayment();
        this.getMonth();
    }

    getPayment(): void {
        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year)
            .subscribe(payment => {this.payment = payment[0];});
    }
    getMonth(): void {
        const id = +this.route.snapshot.paramMap.get('idMonth');

        this.paymentService.getMonth(id)
            .subscribe(month => {this.month = month; console.log(this.month)});
    }
    //add(id: number, year: number): void {
    //    const newPayment =  {id: id, year: year,
    //        fixed: [{ name_fixed:'rent', payment_fixed: 0}],
    //        variable:[
    //            {name_variable :'electricity', current_variable: 0, prev_variable: 0, payment_variable: 0},
    //            {name_variable :'gas', current_variable: 0, prev_variable: 0, payment_variable: 0},
    //            {name_variable :'water', current_variable: 0, prev_variable: 0, payment_variable: 0}
    //        ]
    //    };
    //
    //    this.paymentService.addPayment((newPayment) as Payment)
    //        .subscribe(payment => this.payments.push(payment));
    //
    //}


    //getPayment(): void {
    //    const id = +this.route.snapshot.paramMap.get('id');
    //    const year = +this.route.snapshot.paramMap.get('year');
    //    if(id!=0 && year!=0){
    //
    //        this.paymentService.getPayment(id, year)
    //            .subscribe(payment => {
    //                this.payment = payment; console.log(this.payment);
    //                if((this.payment===undefined)){
    //
    //                        this.add(id,year);
    //                        this.getPayment();
    //                    }
    //
    //            });
    //    }
    //}
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

    save(payment: Payment): void {
        this.payment=payment;
        //console.log(this.payment);
        this.paymentService.updatePayment(payment).subscribe();
    }




}
