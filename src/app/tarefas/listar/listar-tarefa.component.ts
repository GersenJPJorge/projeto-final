import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[];                           // atributo para armazenar o array de tarefas

  constructor(private tarefaService: TarefaService) {}

  ngOnInit() {        // se não tivesse essa tarefa o angular renderiza ela sem conteúdo para não quebrar o código
    this.tarefas = this.listarTodos();
//    this.tarefas = [
//      new Tarefa(1, "Tarefa1", false),
//      new Tarefa(2, "Tarefa2", true),
//    ]
  }
  
  listarTodos(): Tarefa[] {                          // retorna uma lista de tarefas
  	return this.tarefaService.listarTodos();
  }
  
  remover($event: any, tarefa: Tarefa): void {
    // o $event é um objeto do javascript
    $event.preventDefault();
    // o event.preventDefault é usado para evitar o comportamento de reiniciar(atuaizar) a página
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      // o confirm é um método do proprio navegador
      this.tarefaService.remover(tarefa.id);
      // remove e ja atualiza a tela com a nova lista
      this.tarefas = this.listarTodos();
      // usando o próprio utilitário definido acima de 'remover'
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    // como é checkbox e não link, não precisa do event.preventDefault
    if (confirm('Deseja alterar o status da tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.alterarStatus(tarefa.id);
      // repopula após alteração
      this.tarefas = this.listarTodos();
    }
  }
}
