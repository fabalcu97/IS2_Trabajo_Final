import {BaseModel} from './BaseModel';

export interface Lot extends BaseModel
{
    productId: string;
    locationId: string;
    departureDate: number;
    active: boolean;
}