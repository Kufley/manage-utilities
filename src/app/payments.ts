import { fixedUtilities } from './fixedUtilities';
import { variableUtilities } from './variableUtilities';

//export class Months {
//    idMonth: number;
//    name_month: string;
//
//}
export class Payment {
    id: number;
    year: number;
    fixed: fixedUtilities[];
    variable: variableUtilities[];
}