import {BaseModel} from './BaseModel';
import {Product} from './Product';
import {RemissionGuide} from './RemissionGuide';
import {Bill} from './Bill';

export interface Detail extends BaseModel
{
	 idBill : string;
	 idProduct : string;
	 quantity : number;
	 total : number;
	 totalWeight : number;
}