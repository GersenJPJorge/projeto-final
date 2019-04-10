import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Conversao,	ConversaoResponse } from '../models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
// private readonly BASE_URL = "http://data.fixer.io/api/latest";

  constructor(private http: HttpClient) {}

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param Conversao conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
        //Observable<ConversaoResponse> - 
    //    retorna um objeto observable que conterá uma conversãoresponse assim que ele tiver esse retorno conversçaoresponse

    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
        // o & no começo de base significa que estou passando parametros
    // quando se usa a crase o javascript/typscript vai fazer uma interpretação do texto que tiver contido
    // aceita valores dinamicos e para que o valor dinamico seja interpretado precisa do ${ (cifrão seguido da chave) 
  	return this.http
          .get(this.BASE_URL + params); 
          // o get retorna um observable
          // do angular 6 em diante não precisa mais de map e catch
          //      .map(response => response.json() as ConversaoResponse)
          //      .catch(error => Observable.throw(error));
      }

  /**
   * Retorna a cotação para dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): number {
  	if (conversaoResponse === undefined) {
  		return 0;
  	}

  	return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação de dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, 
		conversao: Conversao): string {
  	if (conversaoResponse === undefined) {
  		return '0';
  	}
  	return (1 / conversaoResponse.rates[conversao.moedaPara])
    .toFixed(4);   // limitar o numero de casas decimais em 4
  }

  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }

}








