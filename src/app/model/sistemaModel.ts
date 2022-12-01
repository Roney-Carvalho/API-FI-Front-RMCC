import { BaseModel } from './baseModel';

export class SistemaModel extends BaseModel {  
  titulo: string | undefined;  
  autor: string| undefined;
  ano: string | undefined;
  isbn: string | undefined;
}