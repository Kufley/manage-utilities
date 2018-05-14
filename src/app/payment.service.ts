import { Injectable } from '@angular/core';
import { Payment } from './payments';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

    private monthsUrl = 'api/payments';  // URL to web api
    constructor( private http: HttpClient) { }

    getPayments(year: number): Observable<Payment[]> {

        const url = `${this.monthsUrl}/?year=${year}`;
        return this.http.get<Payment[]>(url);
    }

    getMonth(id: number): Observable<Payment> {

        const url = `${this.monthsUrl}/${id}`;
        return this.http.get<Payment>(url);


    }

    /** PUT: update the month on the server */
    updateMonth (month: Payment): Observable<any> {
        return this.http.put(this.monthsUrl, month, httpOptions);
    }
    /** POST: add a new hero to the server */
    addPayment (payment: Payment): Observable<Payment> {
        return this.http.post<Payment>(this.monthsUrl, payment, httpOptions);
    }
    ///**
    // * Handle Http operation that failed.
    // * Let the app continue.
    // * @param operation - name of the operation that failed
    // * @param result - optional value to return as the observable result
    // */
    //private handleError<T> (operation = 'operation', result?: T) {
    //    return (error: any): Observable<T> => {
    //
    //        // TODO: send the error to remote logging infrastructure
    //        console.error(error); // log to console instead
    //
    //        // // TODO: better job of transforming error for user consumption
    //        // this.log(`${operation} failed: ${error.message}`);
    //
    //        // Let the app keep running by returning an empty result.
    //        return of(result as T);
    //    };
    //}

}
