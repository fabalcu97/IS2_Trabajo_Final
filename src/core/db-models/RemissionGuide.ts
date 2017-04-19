import {BaseModel} from './BaseModel';

export interface RemissionGuide	extends BaseModel
{
	date : number;
	reason : string;
	departure : string;
	arrival : string;
	addressee : string;
	departureDate : number;
	transportCompany : string;
	vehiclePlate : string;	//(Placa del Vehículo)
}