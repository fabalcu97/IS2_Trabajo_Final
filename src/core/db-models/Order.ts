import {BaseModel} from './BaseModel';

export interface Order extends BaseModel
{
	billId: string;
	output: boolean;			//pedido de entrada o salida.
	guideId: string;
	bulkControl: boolean;
	arrivalDate: number;
	received: boolean;
	late: boolean;
}