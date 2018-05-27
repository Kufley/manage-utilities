
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {

        const payments = [
            {id:1, month: 3, year: 2018, saveStatus: 1,
              fixed: [{ name_fixed:'rent', payment_fixed: 210}],
              variable:[
                  {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 10},
                  {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                  {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 110}
              ]
            },
            {id:2, month: 1, year: 2018,  saveStatus: 1,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 20},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            {id:3, month: 2, year: 2018,  saveStatus: 1,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 30},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            //{id:4, month: 4, year: 2018,  saveStatus: 0,
            //    fixed: [{ name_fixed:'rent', payment_fixed: 210}],
            //    variable:[
            //        {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 40},
            //        {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
            //        {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
            //    ]
            //},
            {id:5, month: 3, year: 2017,  saveStatus: 1,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 610},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            {id:6, month: 4, year: 2017,  saveStatus: 1,
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 110},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 510},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable:910}
                ]
            }
        ];
        return {payments};

    }
}