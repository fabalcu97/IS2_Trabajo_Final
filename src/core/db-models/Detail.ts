import {BaseModel} from './BaseModel';

export interface Detail extends BaseModel
{

	 billId : string;
	 productId : string;
	 quantity : number;
	 totalPrice : number;
	 totalWeight : number;
	 lotQuantity: number
}
