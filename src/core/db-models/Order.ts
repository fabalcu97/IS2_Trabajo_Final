import {BaseModel} from './BaseModel';

export interface Order extends BaseModel	//Pedido
{
	idBill : string;
	idGuide : string;
	bulkControl : boolean;
	arrivalDate : number;
	received : boolean;
	late : boolean;
}