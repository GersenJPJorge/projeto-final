import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';
import { DashboardRoutingComponent } from './dashboard-routing.component';
import { DashboardRoutingModule } from './dashboard-routing.modules';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports : [
    DashboardComponent,   // se tem rotas, tem que ter exports
    DashboardRoutingComponent,
  ],
  providers: [
    DadosService,
  ],
})
export class DashboardModule { }
