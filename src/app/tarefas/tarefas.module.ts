import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService, TarefaConcluidaDirective  } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar';
import { TarefasRoutingComponent } from './tarefas-routing.component';
import { TarefasRoutingModule } from './tarefas-routing.module';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
    TarefasRoutingComponent,
  ],
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    TarefasRoutingModule,
  ],
  providers: [
    TarefaService,
  ]
})
export class TarefasModule { }
