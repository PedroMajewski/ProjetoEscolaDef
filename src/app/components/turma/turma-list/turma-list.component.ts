import { Component } from '@angular/core';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {

  ListaTurma: Turma[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){

    let turma1 = new Turma();
    turma1.id = 1;
    turma1.nome = "Turma B"
    turma1.Curso = "Engenharia de Software"
    turma1.Professor = "Carlos Alberto"
    turma1.Aluno = ["João Melão", "José Antonho"]

    let turma2 = new Turma();
    turma2.id = 2;
    turma2.nome = "Turma A";
    turma2.Curso = "Ciência da Computação";
    turma2.Professor = "Ana Paula";
    turma2.Aluno = ["Maria Silva", "Pedro Santos"];

    this.ListaTurma.push(turma1, turma2);

  }

  delete(ListaTurma: Turma){
    let indice = this.ListaTurma.findIndex(x => {return x.id == ListaTurma.id});
    if(confirm('Deseja o deletar a Turma: ' + ListaTurma.nome + '?')){
      this.ListaTurma.splice(indice, 1);
    }
  }
}
