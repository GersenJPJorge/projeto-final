import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';  // por causa do bind do compomente do outro lado
// se vai trabalhar com formulários precisa do FormsModule - defina no conversor.modules

import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  private moedas: Moeda[];      // para listar a combo box no html
  private conversao: Conversao;
  private possuiErro: boolean;
  private conversaoResponse: ConversaoResponse;

  @ViewChild("conversaoForm") conversaoForm: NgForm;    // referencia de ligação entre o html e o atributo da classe
 
  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService) {}

  ngOnInit() {
  	this.moedas = this.moedaService.listarTodas();
  	this.init();        // isso é um método
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  init(): void {
  	this.conversao = new Conversao('USD', 'BRL', null);
  	this.possuiErro = false;
  }

  /**
   * Efetua a chamada para a conversão dos valores.
   *
   * @return void
   */
  converter(): void {
  	if (this.conversaoForm.form.valid) {
      this.conversorService
      .converter(this.conversao)
      .subscribe(
        response => this.conversaoResponse = response,
        error => {
          return this.possuiErro = true;
        }
      );

  	}
  }
}
