import {BaseModel} from './BaseModel';

export interface Bill extends BaseModel
{
	date : number;
	subtotal : number;
	iva : number;
	total : number;
}