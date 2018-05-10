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
    private property;
    constructor(
        private route: ActivatedRoute,
        private paymentService: PaymentService,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.getMonth();
        this.getGasPayment();
    }

    getMonth(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.paymentService.getMonth(id)
            .subscribe(month => this.month = month);
    }
    getGasPayment() {

        const id = +this.route.snapshot.paramMap.get('id');

        this.paymentService.getMonth(id).subscribe(
        current =>  {this.property = current.current_gas; console.log(current.current_gas)},
        prev =>  {this.property = prev.prev_gas; console.log(prev.prev_gas)}
        );

    }

    goBack(): void {
        this.location.back();
    }
    //calcGas(): void {
    //    var c
    //}



}
