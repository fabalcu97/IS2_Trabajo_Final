import {BaseModel} from './BaseModel';

export interface Product extends BaseModel
{
    name: string;
    category: string;
    unitPrice: number;
    unitWeight: number;
}
