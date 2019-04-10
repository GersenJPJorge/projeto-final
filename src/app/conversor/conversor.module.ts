import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';
import { ConversorRoutingModule } from './conversor-routing.modules';
import { ConversorRoutingComponent } from './conversor-routing.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ConversorRoutingModule,
  ],
  declarations: [
  	ConversorComponent,
  	NumeroDirective,
  	ModalCotacaoComponent,
    DataBrPipe,
    ConversorRoutingComponent,
  ],
  exports: [                                              // se usar rotas tem que ter o exports
  	ConversorComponent,
  ],
  providers: [
  	MoedaService,
    ConversorService,
  ],
})
export class ConversorModule { }
