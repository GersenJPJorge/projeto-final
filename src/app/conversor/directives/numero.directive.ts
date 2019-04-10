import { Directive, HostListener, ElementRef } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, 
    useExisting: NumeroDirective, 
    multi: true 
  }]
})
export class NumeroDirective implements ControlValueAccessor {

 onTouched: any;
 onChange: any;

  constructor(private el: ElementRef) {}

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   * 
   * @param any $event
   */
  
  @HostListener('keyup', ['$event'])
  // keyup é  chamado quando voce pressiona e solta uma tecla
  onKeyUp($event: any) {
    // onKeyup é mum método (poderia ser qualquer nome - boas práticas)
    let valor = $event.target.value;
    // é o valor que acabei de digitar - pega o event e joga em valor
    let posDecimais = valor.indexOf('.');
    // coloca o ponto como separador decimal - formato americano
    // retorna em que posição está o ponto, caso exista

    valor = valor.replace(/[\D]/g, '');
    // através de uma expressão regular, retira tudo que não for numero

    if (posDecimais > 0) {
      valor = valor.substr(0, posDecimais) + '.' + 
        valor.substr(posDecimais);
    }

    $event.target.value = valor;   // pega o valor e joga em event
      this.onChange(valor);
  }

  /**
   * Registra função a ser chamada para atualizar 
   * valor na model.
   * 
   * @param any fn
   */

   
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Registra função a ser chamada para atualizar 
   * valor na model para evento touched.
   * 
   * @param any fn
   */

   
  registerOnTouched(fn: any): void {   // è mais para mobile
    this.onTouched = fn;
  }

  /**
   * Obtém o valor contido na model.
   * 
   * @param any value
   */
   
  writeValue(value: any): void {
  	this.el.nativeElement.value = value;
  }
}
