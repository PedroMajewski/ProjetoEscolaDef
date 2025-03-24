import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  listaAluno: Aluno[] = [];
  
    constructor(){
      this.findAll();
    }
  
    findAll(){
  
      let aluno1 = new Aluno();
      aluno1.id = 1;
      aluno1.nome = "João Melão"
      aluno1.telefone = "45912345678"
      aluno1.cadastrocompleto = true
  
      let aluno2 = new Aluno();
      aluno2.id = 2;
      aluno2.nome = "José Antonho"
      aluno2.telefone = ""
      aluno2.cadastrocompleto = false
  
      this.listaAluno.push(aluno1,aluno2)
    }
  
    delete(listaAluno: Aluno){
      let indice = this.listaAluno.findIndex(x => {return x.id == listaAluno.id});
      if(confirm('Deseja o arquivar o Aluno: ' + listaAluno.nome + '?')){
        this.listaAluno.splice(indice, 1);
      }
    }
}
