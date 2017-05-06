import {BaseModel} from './BaseModel';

export interface Order extends BaseModel
{
	billId: string;
	guideId: string;
	bulkControl: boolean;
	arrivalDate: number;
	received: boolean;
	late: boolean;
}