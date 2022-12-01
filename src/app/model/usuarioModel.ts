import { BaseModel } from './baseModel';

export class UsuarioModel extends BaseModel {  
  primeiroNome: string | undefined;  
  sobrenome: string| undefined;
  idade: string | undefined;
  registro: string | undefined;
  endereco: string| undefined;
}