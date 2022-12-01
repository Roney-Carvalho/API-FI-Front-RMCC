import { IInterface } from './IInterface';

export interface IUsuario extends IInterface {
  primeiroNome: string;
  sobrenome: string;
  idade:string;
  registro:string;
  endereco: string;
}
