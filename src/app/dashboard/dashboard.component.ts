import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

import { DadosService } from './dados.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;

  constructor(private dadosService: DadosService) {}

  ngOnInit() {
  	this.dadosService.obterDados().subscribe( // como é um observable precisamos nos inscrever para sermos notificados quando do
  		dados => {                              // retorno dos dados 
  			this.dados = dados;                   // recebendo os dados eu populo em dados (private dados: any;) 
  			this.init();                          // assim que tiver os dados eu já posso iniciar o processo de exibir os gráficos
  		});
  }

  /**
   * Inicializa a API de gráficos com delay de 1 segundo,
   * o que permite a integração da API com o Angular.
   *
   * @return void
   */
  
  init(): void {
    if(typeof(google) !== 'undefined') { // essa variável google é externa,e por padrão, deve ser definida com 'declare var google: any;'
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {             // aguarde 1 segundo para o refresh da carga 
      	google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 1000);
    }
  }

  /**
   * Método chamado assim que a API de gráficos é inicializada.
   * Reponsável por chamar os métodos geradores dos gráficos.
   *
   * @return void
   */
exibirGraficos(): void {
    this.exibirPieChart();
   	this.exibir3dPieChart();
  	this.exibirBarChart();
  	this.exibirLineChart();
  	this.exibirColumnChart();
  	this.exibirDonutChart();
  }

  /**
   * Exibe o gráfico Pie Chart.
   *
   * @return void
   */
exibirPieChart(): void {
    const el = document.getElementById('pie_chart'); // 'pie_chart' é uma div do html
                                                     // 'const el' - el é uma referência 
    const chart = new google.visualization.PieChart(el); // passando a div onde ele será exibido e armazenará na variável chart

    chart.draw(this.obterDataTable(), this.obterOpcoes()); // comando draw irá desenhar os dados
  }

  /**
   * Exibe o gráfico Pie Chart em 3D. 
   *
   * @return void
   */
exibir3dPieChart(): void {
  	const el = document.getElementById('3d_pie_chart');
  	const chart = new google.visualization.PieChart(el);
	  const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Donut Chart.
   *
   * @return void
   */
exibirDonutChart(): void {
  	const el = document.getElementById('donut_chart');
  	const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart.
   *
   * @return void
   */
exibirBarChart(): void {
  	const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Line Chart.
   *
   * @return void
   */
exibirLineChart(): void {
  	const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o gráfico Column Chart.
   *
   * @return void
   */
exibirColumnChart(): void {
  	const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Cria e retorna o objeto DataTable da API de gráficos,
   * responsável por definir os dados do gráfico.
   *
   * @return any
   */
obterDataTable(): any {                                   // mapeia nossa array de dados, que está em dados.service.ts
  	const data = new google.visualization.DataTable();    // cria uma instancia dele e adiciona as colunas e linhas

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados);

    return data;
  }

  /**
   * Retorna as opções do gráfico, que incluem o título
   * e tamanho do gráfico.
   *
   * @return any
   */
obterOpcoes(): any {
  	return {
    	'title': 'Quantidade de cadastros primeiro semestre',
        'width': 400,
        'height': 300
    };
  }

}
