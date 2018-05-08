import { Injectable } from '@angular/core';
import { Payment } from './payments';
import { PAYMENTS } from './mock-payments';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

    getPayments(): Observable<Payment[]> {
        return of( PAYMENTS );
    }
    getMonth(id: number): Observable<Payment> {
        return of(PAYMENTS.find(month => month.pos_month === id));
    }

  constructor() { }
}
