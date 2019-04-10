import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  	/**
     * Aplica formatação para a data.
     * 
     * @param string dataEn
     * @return string data no formato dd/mm/yyyy
     */
	transform(dataEn: string): string {
 		if (!dataEn) {
            return '';
        }
    
        const dataArr = dataEn.split('-'); // separando por traço dia mes ano, ou seja , um array com 3 entradas
                                          // posição 0 é o ano, posição 1 é mes e a posição dois é o dia
    
        if (dataArr.length !== 3) {
            return dataEn;
        }
        
        return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
        // inverto para dia;mes;ano
	}

}
