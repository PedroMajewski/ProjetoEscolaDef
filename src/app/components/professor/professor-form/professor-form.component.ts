import { Component, inject } from '@angular/core';
import { Professor } from '../../../models/professor';
import { Aluno } from '../../../models/aluno';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-professor-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professor-form.component.html',
  styleUrl: './professor-form.component.scss'
})
export class ProfessorFormComponent {
professor: Professor = new Professor();

RotaAtiva = inject(ActivatedRoute);

constructor() {
  let id = this.RotaAtiva.snapshot.params['id'];
  if (id) { // FindById
    let professor1 = new Professor();

    professor1.id = 1;
    professor1.nome = 'Carlos Silva';
    professor1.telefone = '45912345678';
    professor1.email = 'CarlosSilvao@gmail.com';
    professor1.formacao = 'Matemática';

    this.professor = professor1;
  }
}

save() {
  if (this.professor.id > 0) {
    alert('Atualizando o Professor');
  } else {
    alert('Salvando o Professor');
  }
}
}
