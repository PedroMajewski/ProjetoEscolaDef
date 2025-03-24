import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {

  listaProfessor: Professor[] = [];

  constructor(){
    this.findAll();
  }

  findAll(){

    let professor1 = new Professor();
    professor1.id = 1;
    professor1.nome = "João Silva"
    professor1.telefone = "45912345678"
    professor1.email = "joaodasilva@teste.com"
    professor1.formacao = "Matemática"

    let professor2 = new Professor();
    professor2.id = 2;
    professor2.nome = "Maria Oliveira"
    professor2.telefone = "45912345678"
    professor2.email = "mariaoli@gmail.com"
    professor2.formacao = "Português"

    this.listaProfessor.push(professor1, professor2)
  }

  delete(listaProfessor: Professor){
    let indice = this.listaProfessor.findIndex(x => {return x.id == listaProfessor.id});
    if(confirm('Deseja deletar o professor: ' + listaProfessor.nome + '?')){
      this.listaProfessor.splice(indice, 1);
    }
  }
}
