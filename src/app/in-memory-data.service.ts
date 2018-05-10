
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const payments = [
            {year: 2018, id: 1, name_month: 'Jan', current_electricity: 1140,prev_electricity: 1040, current_gas: 3490, prev_gas: 3480, current_water: 100, prev_water: 92, rent:2700},
            {year: 2018, id: 2, name_month: 'Feb', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 3, name_month: 'Mar', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 4, name_month: 'Apl', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 5, name_month: 'May', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 6, name_month: 'Jun', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 7, name_month: 'Jul', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 8, name_month: 'Aug', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 9, name_month: 'Sep', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 10, name_month: 'Oct', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 11, name_month: 'Nov', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:2700},
            {year: 2018, id: 12, name_month: 'Dec', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 60, current_water: 100, prev_water: 40, rent:2700},

        //    {year: 2019, id: 1, name_month: 'Jan', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 2, name_month: 'Feb', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 3, name_month: 'Mar', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 4, name_month: 'Apl', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 5, name_month: 'May', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 6, name_month: 'Jun', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 7, name_month: 'Jul', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 8, name_month: 'Aug', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 9, name_month: 'Sep', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 10, name_month: 'Oct', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 11, name_month: 'Nov', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 90, current_water: 100, prev_water: 40, rent:49},
        //    {year: 2019, id: 12, name_month: 'Dec', current_electricity: 40,prev_electricity: 60, current_gas: 80, prev_gas: 60, current_water: 100, prev_water: 40, rent:49},
        ];
        return {payments};
    }
}