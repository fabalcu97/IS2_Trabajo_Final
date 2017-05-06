import {BaseModel} from './BaseModel';

export interface StorageLocation extends BaseModel
{
    x,y,z : number;
    available : boolean;
    category : string;
}