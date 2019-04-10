import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class DadosService {

    readonly dados = [                             // array com atributos readonly é final e não poderá ser alterado
        ['Janeiro', 33],
        ['Fevereiro', 68],
        ['Março', 49],
        ['Abril', 15],
        ['Maio', 80],
        ['Junho', 27]
    ];

 
	constructor() {}

	/**
	 * Retorna um observable contendo os dados a serem
	 * exibidos no gráfico.
	 *
	 * @return Observable<any>
	 */

obterDados(): Observable<any> {              // retorna dados no formato observable - esse observable está sendo feito manualmente
		return new Observable(observable => {    // sendo assim ele deve ser instanciado e passar uma referencia do próprio observable
			observable.next(this.dados);           // o next notifica todos os inscritos no observable já com os dados 
			observable.complete();                 // notifica os inscritos que não há mais necessidade de ficar na escuta
		});
  }
}
