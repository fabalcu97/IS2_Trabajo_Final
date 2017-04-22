import {BaseModel} from './BaseModel';

export interface RemissionGuide	extends BaseModel
{
	date : number;
	reason : string;
	departure : string;
	arrival : string;
	addressee : string;
	departureDate : number;
	arrivalDate : number;
	transportCompany : string;
	vehiclePlate : string;	//(Placa del Vehículo)
	totalWeight : number;
}