import {BaseModel} from './BaseModel';

export interface RemissionGuide	extends BaseModel
{
	reason : string;
	addressee : string;
	departureDate : number;
	arrivalDate : number;
	transportCompany : string;
	vehiclePlate : string;	
	totalWeight : number;
}