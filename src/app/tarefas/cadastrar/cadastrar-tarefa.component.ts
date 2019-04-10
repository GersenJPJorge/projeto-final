
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

@ViewChild('formTarefa') formTarefa: NgForm;
  // viewchild se certifica que o formulário está ok para ser enviado - tambem usa 'formTarefa' como referencia no html
  // NfForm faz parte do pacote angular/forms
  tarefa: Tarefa;   // aqui inicializado como nulo
  // precisamos dessa referencia (tarefa)para armazenar o objeto                     

  constructor(private tarefaService: TarefaService,
  	          private router: Router) {}

  ngOnInit() {
    this.tarefa = new Tarefa(); // precisa instancia-lo para que tenha uma associação com a interface
  }

  cadastrar(): void {
    if (this.formTarefa.form.valid) {
        // retorna true ou false caso o formulario tenha erro
      this.tarefaService.cadastrar(this.tarefa);
      // a tarefa vai estar populada com o nome da tarefa
      this.router.navigate(["/tarefas"]);
      // apos o  cadastro, volta para tarefas
    }
  }
}
