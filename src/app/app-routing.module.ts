import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
	{ 
		path: '',                                   // na inicialização ou se não for digitado nada na url
		redirectTo: '/dashboard', 
		pathMatch: 'full'                           // passa a url completa
    },   
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  // forRoot indica que ele é único, que controlará todos as rotas da aplicação
  exports: [ RouterModule ]                   // com o exporte ele fica disponível para o módulo principal
})
export class AppRoutingModule {}
