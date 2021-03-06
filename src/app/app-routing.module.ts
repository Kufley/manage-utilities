import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YearComponent } from "./year/year.component";
import { SingleMonthComponent } from "./single-month/single-month.component";

const routes: Routes = [
    { path: '', redirectTo: 'year/2018', pathMatch: 'full' },
    { path: 'year/:year', component: YearComponent },
    { path: 'year/:year/payment/:month', component: SingleMonthComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
