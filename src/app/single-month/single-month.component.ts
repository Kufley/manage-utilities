import {Component, OnInit, Input} from '@angular/core';
import {Payment} from "../payments";

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {PaymentService} from '../payment.service';
//import {unescapeHtml} from "@angular/platform-browser/src/browser/transfer_state";
import {variableUtilities} from "../variableUtilities";
import {fixedUtilities} from "../fixedUtilities";


@Component({
    selector: 'app-single-month',
    templateUrl: './single-month.component.html',
    styleUrls: ['./single-month.component.css']
})
export class SingleMonthComponent implements OnInit {

    @Input() payment:Payment;
    name:string;
    wrongPayment:boolean = false;


    constructor(private route:ActivatedRoute,
                private paymentService:PaymentService,
                private location:Location) {
    }

    trackByIndex(index:number, obj:any):any {

        return index;
    }
    wrongPay(index:number){
        var wrongPayment = false;
        for (let i = 0; i < this.payment.variable.length; i++) {
            if (this.payment.variable[i].current_variable < this.payment.variable[i].prev_variable) {
                wrongPayment = true;
            }
        }

        return wrongPayment;

    }
    ngOnInit():void {
        this.getPayment();


    }

    getPayment():void {
        const id = +this.route.snapshot.paramMap.get('month');
        const year = +this.route.snapshot.paramMap.get('year');

        this.paymentService.getPayment(id, year)
            .subscribe(payment => {
                this.payment = payment[0];
                this.getTotalMonth();
            });
    }



    getTotalMonth() {

        var sum = 0;
        var wrongPayment = false;
        for (let i = 0; i < this.payment.variable.length; i++) {
            if (this.payment.variable[i].current_variable < this.payment.variable[i].prev_variable) {
                wrongPayment = true;
            } else {
                this.payment.variable[i].payment_variable = (this.payment.variable[i].current_variable -
                    (+this.payment.variable[i].prev_variable)) * this.payment.variable[i].coof;

                sum += this.payment.variable[i].payment_variable;
            }
        }
        for (let j = 0; j < this.payment.fixed.length; j++) {

            sum += this.payment.fixed[j].payment_fixed;
        }
        this.payment.total = sum;


    }

    validation(name:string):boolean {
        for (let j = 0; j < this.payment.fixed.length; j++) {

            if (name == this.payment.fixed[j].name_fixed) {
                return false;
            }

        }

        for (let i = 0; i < this.payment.variable.length; i++) {

            if (name == this.payment.variable[i].name_variable) {
                return false;
            }
        }
        return true;

    }

    addUtility(name:string, index:number):void {
        if (this.validation(name)) {

            if (index == 0) {
                let newUtility = new variableUtilities();
                newUtility = {name_variable: name, current_variable: 0, prev_variable: 0, payment_variable: 0, coof: 1};
                this.payment.variable.push(newUtility);


            } else {
                let newUtility = new fixedUtilities();
                newUtility = {name_fixed: name, payment_fixed: 0};
                this.payment.fixed.push(newUtility);


            }

            this.paymentService.updatePayment(this.payment).subscribe();

        }

        this.name = '';
    }

    goBack():void {
        this.location.back();
    }

    save(payment:Payment, saveStatus:number):void {
        this.payment = payment;
        this.payment.saveStatus = saveStatus;
        this.paymentService.updatePayment(this.payment).subscribe();
        this.getTotalMonth();
        // this.goBack();
    }

}
