import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({ 
	selector: '[tarefaConcluida]' 
})
export class TarefaConcluidaDirective implements OnInit  {
   
    @Input() tarefaConcluida: boolean;

    // ElementRef é uma referência do html que quero adicionar ao componente 
    constructor(private el: ElementRef) {}

    ngOnInit() {
      if (this.tarefaConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through";
        // nativeElement é a coluna td da tabela do html
      }
    }
}
