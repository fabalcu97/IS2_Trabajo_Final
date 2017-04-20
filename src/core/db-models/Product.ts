import {BaseModel} from './BaseModel';

export interface Product extends BaseModel
{
     name : string;
     idCategory : string;
     unitPrice : number;
     unitWeight : number;
     unitOfMeasurement : number;
     date : number;
}
