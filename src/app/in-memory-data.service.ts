
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
       const months= [
            { 'idMonth' :1 , 'name_month':'Jan'},
            { 'idMonth' :2 , 'name_month':'Feb'},
            { 'idMonth' :3 , 'name_month':'Mar'},
            { 'idMonth' :4 , 'name_month':'Apr'},
            { 'idMonth' :5 , 'name_month':'May'},
            { 'idMonth' :6 , 'name_month':'Jun'},
            { 'idMonth' :7 , 'name_month':'Jul'},
            { 'idMonth' :8 , 'name_month':'Aug'},
            { 'idMonth' :9 , 'name_month':'Sep'},
            { 'idMonth' :10 , 'name_month':'Oct'},
            { 'idMonth' :11 , 'name_month':'Mov'},
            { 'idMonth' :12 , 'name_month':'Dec'}

        ];


        const payments = [
            {id:1, month: 1, year: 2018,
              fixed: [{ name_fixed:'rent', payment_fixed: 210}],
              variable:[
                  {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                  {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                  {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 110}
              ]
            },
            {id:2, month: 2, year: 2018,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            {id:3, month: 3, year: 2018,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            {id:4, month: 4, year: 2018,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            }
            //{month: 5, year: 2018, name_month: 'May',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{month: 6, year: 2018, name_month: 'Jun',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{month: 7, year: 2018, name_month: 'Jul',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{month: 8, year: 2018, name_month: 'Aug',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{month: 9, year: 2018, name_month: 'Sep',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{id: 10, year: 2018, name_month: 'Oct',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{id: 11, year: 2018, name_month: 'Nov',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{id: 12, year: 2018, name_month: 'Dec',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            //{id: 1, year: 2019, name_month: 'Jan',
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},








            //{year: 2018, id: 1, name_month: 'Jan', current_electricity: 1140,prev_electricity: 1040, electricity_payment:0, current_gas: 3490, gas_payment:0, prev_gas: 3480, current_water: 100, water_payment:0, prev_water: 92, rent:2700},
            //{year: 2018, id: 2, name_month: 'Feb', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0,  current_water: 100, prev_water: 40, water_payment:0, rent:2700},
            //{year: 2018, id: 3, name_month: 'Mar', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 4, name_month: 'Apl', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 5, name_month: 'May', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 6, name_month: 'Jun', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 7, name_month: 'Jul', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 8, name_month: 'Aug', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 9, name_month: 'Sep', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 10, name_month: 'Oct', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 11, name_month: 'Nov', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 90,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},
            //{year: 2018, id: 12, name_month: 'Dec', current_electricity: 40,prev_electricity: 60,electricity_payment:0, current_gas: 100, prev_gas: 60,gas_payment:0, current_water: 100, prev_water: 40,water_payment:0, rent:2700},

        ];
        return {payments, months};

    }
}