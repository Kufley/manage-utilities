import { Injectable } from '@angular/core';
import { Payment } from './payments';
import { PAYMENTS } from './mock-payments';
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

    getPayments(): Observable<Payment[]> {
        // return this.http.get<Hero[]>(this.heroesUrl)

        return this.http.get<Payment[]>(this.monthsUrl).pipe(
            catchError(this.handleError('getPayments', []))
        );
    }

    getGasPayment(): Observable<Payment> {

         return this.http.get<Payment>(this.monthsUrl);
    }

    getMonth(id: number): Observable<Payment> {

        // return of(PAYMENTS.find(month => month.id === id));

        const url = `${this.monthsUrl}/${id}`;
        return this.http.get<Payment>(url);

        // const url = `${this.monthsUrl}/${id}`;
        // return this.http.get<Payment>(url).pipe(
        //     catchError(this.handleError<Payment>(`getMonth id=${id}`))
        // );

    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
