import { fixedUtilities } from './fixedUtilities';
import { variableUtilities } from './variableUtilities';

export class Payment {
    id:number;
    month: number;
    year: number;
    total: number;
    saveStatus: number;
    fixed: fixedUtilities[];
    variable: variableUtilities[];
}