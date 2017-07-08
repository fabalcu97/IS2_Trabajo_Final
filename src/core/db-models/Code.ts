import {BaseModel} from './BaseModel';

export interface Code extends BaseModel
{
  type: string;
	code: string;
  used: boolean;
}