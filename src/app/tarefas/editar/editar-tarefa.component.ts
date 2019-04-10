import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { NgForm } from '@angular/forms'; 

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
            private tarefaService: TarefaService,
  	        private route: ActivatedRoute,
  	        private router: Router) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    // atraves do módulo route, do ActivatedRoute, temos acesso ao objeto snapshot seguido de params.
    // em params temos todos os parametros contidos na url seguido de ':'
    // no nosso caso é :id, portanto basta chamar por id
    // o +this é um operador do typscript que converte o valor id em formato string para número, garantindo nçao ter dado inválido na url 
	this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid) {
      this.tarefaService.atualizar(this.tarefa);
      // atualizou, vai para tarefas
	    this.router.navigate(['/tarefas']);
    }
  }

}
