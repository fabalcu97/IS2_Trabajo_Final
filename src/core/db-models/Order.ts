import {BaseModel} from './BaseModel';

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