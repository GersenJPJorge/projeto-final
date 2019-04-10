import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
  	ConversorComponent,
  	NumeroDirective,
  	ModalCotacaoComponent,
  	DataBrPipe,
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
