import {BaseModel} from './BaseModel';

export interface Product extends BaseModel
{
     category : string;
     subcategory : string;
     unitPrice : number;
     unitWeight : number;
     unitOfMeasurement : number;
     date : number;
}
