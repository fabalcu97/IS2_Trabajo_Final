import {BaseModel} from './BaseModel';

export interface Detail extends BaseModel
{
	 idBill : string;
	 idProduct : string;
	 idGuide : string;
	 quantity : number;
	 totalPrice : number;
	 totalWeight : number;
}
