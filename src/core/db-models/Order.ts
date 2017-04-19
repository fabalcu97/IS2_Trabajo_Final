import {BaseModel} from './BaseModel';
import {RemissionGuide} from './RemissionGuide';
import {Bill} from './Bill';

export interface Order extends BaseModel	//Pedido
{
	idBill : string;
	idGuide : string;
	bulkControl : boolean;
	departureDate : number; //(fecha de salida)
	arrivalDate : number;
	state : string;
	date : number;
}