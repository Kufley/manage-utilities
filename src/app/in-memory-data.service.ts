
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payments = [
            {id: 1, year: 2018, name_month: 'Jan',
              fixed: [{ name_fixed:'rent', payment_fixed: 210}],
              variable:[
                  {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                  {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                  {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
              ]
            },
            {id: 2, year: 2018, name_month: 'Feb',
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            {id: 3, year: 2018, name_month: 'Mar',
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            },
            {id: 3, year: 2018, name_month: 'Apl',
                fixed: [{ name_fixed:'rent', payment_fixed: 210}],
                variable:[
                    {name_variable :'electricity', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'gas', current_variable: 210, prev_variable: 120, payment_variable: 210},
                    {name_variable :'water', current_variable: 210, prev_variable: 120, payment_variable: 210}
                ]
            }

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
        return {payments};
    }
}