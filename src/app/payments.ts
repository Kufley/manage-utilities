import { fixedUtilities } from './fixedUtilities';
import { variableUtilities } from './variableUtilities';

export class Payment {
    id: number;
    year: number;
    name_month: string;
    fixed: fixedUtilities[];
    variable: variableUtilities[];
}