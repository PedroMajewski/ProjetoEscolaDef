import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-aluno-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent {
  aluno: Aluno = new Aluno();
  
    RotaAtiva = inject(ActivatedRoute);
  
    constructor(){
      let id = this.RotaAtiva.snapshot.params['id'];
        if(id) { //FindById
          let aluno1 = new Aluno();
    
          aluno1.id = 1;
          aluno1.nome = 'Pedro Majewski';
    
          this.aluno = aluno1;
        }
    }
  
    save(){
      if(this.aluno.id > 0) {
        alert('Atualizando o Aluno');
      }else {
        alert('Salvando o Aluno');
      }
    }
}
