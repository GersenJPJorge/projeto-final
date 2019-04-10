import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports : [
    DashboardComponent,   // se tem rotas, tem que ter exports
  ],
  providers: [
    DadosService,
  ],
})
export class DashboardModule { }
