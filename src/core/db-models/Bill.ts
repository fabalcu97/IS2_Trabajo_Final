import {BaseModel} from './BaseModel';

export interface Bill extends BaseModel
{
	subtotal : number;
	iva : number;
	total : number;
}