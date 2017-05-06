import {BaseModel} from './BaseModel';

export interface Lot extends BaseModel
{
    classification : string;    //esto es lo que reemplaza a categoria
    locationId : string;
    lot : number;   //cantidad de un producto especifico en lote
}