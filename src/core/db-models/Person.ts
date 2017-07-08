import {BaseModel} from './BaseModel';

export interface Person extends BaseModel
{
	name: string;
	username: string;
	password: string;
	email: string;
  type: string;
}