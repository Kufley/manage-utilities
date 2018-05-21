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

  payments : Payment[];
  months : Months[];

  today = Date.now();
  todayMonth = new Date().getMonth();
  todayYear = new Date().getFullYear();




  constructor(
      private route: ActivatedRoute,
      private paymentService: PaymentService
  ) {}

    getPayments(): void {

      const idYear = +this.route.snapshot.paramMap.get('year');
      //const id = +this.route.snapshot.paramMap.get('id');
      this.paymentService.getPayments(idYear).subscribe(payments => {this.payments = payments;}

      );

    }
  getMonths(): void {
      this.paymentService.getMonths().subscribe(months => {this.months = months;}
      );
    }





  //add(name_month: string): void {
  //  name_month = name_month.trim();
  //  if (!name_month) { return; }
  //  this.paymentService.addPayment({ name_month } as Payment)
  //      .subscribe(payment => {
  //        this.payments.push(payment);
  //      });
  //}
  //getPayment(): void {
  //  const idmonth = +this.route.snapshot.paramMap.get('idmonth');
  //  const idyear = +this.route.snapshot.paramMap.get('idyear');
  //  if(idyear!=0 && idmonth!=0){
  //    const todayMonth =new Date().getMonth();
  //    const todayYear = new Date().getFullYear();
  //    this.paymentService.getPayment(idmonth,idyear)
  //        .subscribe(payment => {
  //          this.payments = payment;
  //          if((this.payments.length==0) || (this.payments===undefined)){
  //            if((idyear==todayYear) && (idmonth>=todayMonth) && (idmonth-2<=todayMonth)){
  //              this.add(idmonth,idyear);
  //              this.getPayment();
  //            }
  //          }
  //        });
  //  }
  //}
  add(id: number, year: number): void {
    const newPayment =  {month: id, year: year,
          fixed: [{ name_fixed:'rent', payment_fixed: 0}],
          variable:[
            {name_variable :'electricity', current_variable: 0, prev_variable: 0, payment_variable: 0},
            {name_variable :'gas', current_variable: 0, prev_variable: 0, payment_variable: 0},
            {name_variable :'water', current_variable: 0, prev_variable: 0, payment_variable: 0}
          ]
        };
    this.paymentService.addPayment((newPayment) as Payment)
        .subscribe(payment => {this.payments.push(payment);} );


  }
  changePaymentStatus(month: number){
      console.log(this.months);
      for (let i = 0; i <= this.months.length - 1; i++){
          if(this.months[i].idMonth == month){
              console.log(this.months[i].paymentStatus);
              this.months[i].paymentStatus == true;
              this.paymentService.updateMonth(this.months[i]).subscribe();

              console.log(this.months[i].paymentStatus);
          }
      }
  }

    checkActive(monthId: number): boolean {
        let res = false;
        for (let i = 0; i <= this.months.length; i++){
            if (this.payments[i].month == monthId || this.payments[i].year == this.todayYear){
                res = true;
            }
            console.log(res);
        }

        return res;
    }

  ngOnInit() {
      this.getPayments();
      this.getMonths();


  }

}