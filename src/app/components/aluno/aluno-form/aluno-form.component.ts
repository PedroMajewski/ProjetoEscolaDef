import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { AlunoService } from '../../../services/aluno.service';

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
    alunoService = inject(AlunoService);

    constructor(){
      let id = this.RotaAtiva.snapshot.params['id'];
    }
  
   save(aluno: Aluno){
    this.alunoService.save(aluno).subscribe({
      next: (mensagemSaveAluno) => {
        alert("Aluno salvo com sucesso!")
      },
      error: (error) => {
        alert("Erro ao salvar aluno : " + error)
      }
    })
   } 
}
