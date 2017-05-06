import {BaseModel} from './BaseModel';

export interface Product extends BaseModel
{
     name : string;
     unitPrice : number;
     unitWeight : number;
     unitOfMeasurement : number;
     date : number;
     idLot : string;
}
