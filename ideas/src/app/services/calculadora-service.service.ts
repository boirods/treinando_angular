import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraServiceService {
  static readonly SOMA: string = '+';
  static readonly SUBTRAI: string = '-';
  static readonly MULTIPLICA: string = '*';
  static readonly DIVIDE: string = '/';

  constructor() { }

  /**
   * Função que realiza os calculos de acordo com o operador.
   * @param num1 
   * @param num2 
   * @param operacao 
   * @returns 
   */
  calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;
    switch(operacao){
      case CalculadoraServiceService.SOMA:
        resultado = num1+num2;
        break;
      case CalculadoraServiceService.SUBTRAI:
        if(num2 !== 0){
          resultado = num1-num2;
        } else {
          resultado=0;
        }
        break;
      case CalculadoraServiceService.MULTIPLICA:
        resultado=num1*num2;
        break;
      case CalculadoraServiceService.DIVIDE:
        if(num2 !== 0){
          resultado = num1/num2;
        } else {
          resultado=0;
        }
        break;
      default:
        resultado=0;
        break;
    }
    return resultado;
  }
}
