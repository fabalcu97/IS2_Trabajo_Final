import {BaseModel} from './BaseModel';

export interface Lot extends BaseModel
{
    classification: string;
    locationId: string;
    quantity: number;
}