import {BaseModel} from './BaseModel';

export interface Person extends BaseModel {
	name: string;
	sex: string;
	email: string;
    
}