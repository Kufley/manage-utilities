import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YearComponent } from "./year/year.component";
import { SingleMonthComponent } from "./single-month/single-month.component";


const routes: Routes = [
    { path: '', redirectTo: '/year', pathMatch: 'full' },
    { path: 'year', component: YearComponent },
    { path: 'month/:pos_month', component: SingleMonthComponent },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }
