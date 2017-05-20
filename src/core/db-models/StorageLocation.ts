import {BaseModel} from './BaseModel';

export interface StorageLocation extends BaseModel
{
    x: number;
    y: number;
    z: number;
    available: boolean;
    category: string;
}