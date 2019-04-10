import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

   /* Define as constantes utilizadas 
     para identificar as operações de cálculo */
     // usando static eu posso usar em qualquer lugar sem precisar instanciar a classe
     // posso chamar usando o nome da classe.o nome da constante - ex.CalculadoraService.SOMA 

     static readonly SOMA: string = '+';                      
     static readonly SUBTRACAO: string = '-';
     static readonly DIVISAO: string = '/';
     static readonly MULTIPLICACAO: string = '*';

  constructor() { }

    /**
   * Método que calcula uma operação matemática dado 
   * dois números.
   * Suporta as operações soma, subtração, divisão, 
   * e multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */
  // dois pontos após a definição do método, indica o tipo do retorno
  calcular(num1: number, num2: number, operacao: string): number {
    // o let gera uma variável local  - só pode ser usada aqui
  	let resultado: number; // armazena o resultado da operação

  	switch(operacao) {
  	  case CalculadoraService.SOMA:
  	    resultado = num1 + num2;
  		break;
  	  case CalculadoraService.SUBTRACAO:
  	    resultado = num1 - num2;
  		break;
  	  case CalculadoraService.DIVISAO:
  	    resultado = num1 / num2;
  		break;
  	  case CalculadoraService.MULTIPLICACAO:
  	    resultado = num1 * num2;
  		break;
  	  default:
  	    resultado = 0;
  	}

  	return resultado;
  }
}
