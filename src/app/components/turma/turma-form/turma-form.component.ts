import { Component, inject } from '@angular/core';
import { Turma } from '../../../models/turma';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-turma-form',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turma-form.component.html',
  styleUrl: './turma-form.component.scss'
})
export class TurmaFormComponent {
turma: Turma = new Turma();

RotaAtiva = inject(ActivatedRoute);

constructor() {
  let id = this.RotaAtiva.snapshot.params['id'];
  if (id) { // FindById
    let turma1 = new Turma();

    turma1.id = 2;
    turma1.nome = "Turma A";
    turma1.Curso = "Análise de Sistemas";
    turma1.Professor = "Ana Paula";
    turma1.Aluno = ["Maria Silva", "Pedro Santos"];

    this.turma = turma1;
  }
}

save() {
  if (this.turma.id > 0) {
    alert('Atualizando a Turma');
  } else {
    alert('Salvando a Turma');
  }
}
}
