
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const payments = [
            {id:1, month: 1, year: 2018,  saveStatus: 1,total: 550,
                fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 20, coof: 1.5},
                    {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5},
                    {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5}
                ]
            },
            {id:2, month: 2, year: 2018,  saveStatus: 1,total: 560,
                fixed: [{ name_fixed:'Rent', payment_fixed: 220}],
                variable:[
                    {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 30, coof: 1.5},
                    {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5},
                    {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5}
                ]
            },


            {id:3, month: 3, year: 2018, saveStatus: 1, total: 540,
                fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 10, coof: 1.5},
                    {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5},
                    {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable: 110, coof: 1.5}
                ]
            },
            {id:4, month: 4, year: 2018,  saveStatus: 0, total: 3385,
               fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
               variable:[
                   {name_variable :'Electricity', current_variable: 30, prev_variable: 20, payment_variable: 40, coof: 11.5},
                   {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 22.5},
                   {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 11.5}
               ]
            },
            {id:5, month: 3, year: 2017,  saveStatus: 1, total: 1240,
                fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5},
                    {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 610, coof: 1.5},
                    {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable: 210, coof: 1.5}
                ]
            },
            {id:6, month: 4, year: 2017,  saveStatus: 1, total: 1140,
                fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 110, coof: 1.5},
                    {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 510, coof: 1.5},
                    {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable:910, coof: 1.5}
                ]
            },
            // {id:7, month: 4, year: 2019,  saveStatus: 1, total: 1140,
            //     fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
            //     variable:[
            //         {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 110, coof: 1.5},
            //         {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 510, coof: 1.5},
            //         {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable:910, coof: 1.5}
            //     ]
            // }, {id:8, month: 4, year: 2016,  saveStatus: 1, total: 1140,
            //     fixed: [{ name_fixed:'Rent', payment_fixed: 210}],
            //     variable:[
            //         {name_variable :'Electricity', current_variable: 210, prev_variable: 120, payment_variable: 110, coof: 1.5},
            //         {name_variable :'Gas', current_variable: 210, prev_variable: 120, payment_variable: 510, coof: 1.5},
            //         {name_variable :'Water', current_variable: 210, prev_variable: 120, payment_variable:910, coof: 1.5}
            //     ]
            // }
        ];
        return {payments};

    }
}