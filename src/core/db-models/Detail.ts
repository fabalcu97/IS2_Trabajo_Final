import {BaseModel} from './BaseModel';

export interface Detail extends BaseModel
{
	 idBill : string;
	 idProduct : string;
	 quantity : number;
	 total : number;
	 totalWeight : number;
}
