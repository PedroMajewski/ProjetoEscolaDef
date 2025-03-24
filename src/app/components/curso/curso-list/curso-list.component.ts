import { Component } from '@angular/core';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {

  listaCurso: Curso[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){

    let curso1 = new Curso();
    curso1.id = 1;
    curso1.nome = "Engenharia de Software"

    let curso2 = new Curso();
    curso2.id = 2;
    curso2.nome = "Análise e Desenvolvimento de Sistemas"

    this.listaCurso.push(curso1,curso2)
  }

  delete(listaCurso: Curso){
    let indice = this.listaCurso.findIndex(x => {return x.id == listaCurso.id});
    if(confirm('Deseja o deletar o curso: ' + listaCurso.nome + '?')){
      this.listaCurso.splice(indice, 1);
    }
  }
}
