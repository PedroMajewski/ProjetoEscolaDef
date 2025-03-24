import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-curso-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './curso-form.component.html',
  styleUrl: './curso-form.component.scss'
})
export class CursoFormComponent {

  curso: Curso = new Curso();

  RotaAtiva = inject(ActivatedRoute)

  constructor(){
    let id = this.RotaAtiva.snapshot.params['id'];
      if(id) { //FindById
        let curso1 = new Curso();
  
        curso1.id = 1;
        curso1.nome = 'Engenharia de Software';
  
        this.curso = curso1;
      }
  }

  save(){
    if(this.curso.id > 0) {
      alert('Atualizando o Curso ');
    }else {
      alert('Salvando o Curso ');
    }
  }

}
