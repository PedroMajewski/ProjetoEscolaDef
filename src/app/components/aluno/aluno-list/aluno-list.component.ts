import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  listaAluno: Aluno[] = [];

  alunoService = inject(AlunoService);
  
    constructor(){
      this.findAll();
    }
  
    findAll(){
      this.alunoService.findAll().subscribe({
        next: (listaRetornadaAluno) => {
          this.listaAluno = listaRetornadaAluno;
        },
        error: (error) => {
          alert('Erro ao carregar a lista de Alunos' + error);
        }
      });
    }
  
    delete(listaAluno: Aluno){
      this.alunoService.deleteById(listaAluno.id).subscribe({
        next: (mensagemDelete) => {
          alert("Aluno deletado com sucesso!: " + mensagemDelete);
        },
        error: (error) =>{
          alert("Erro ao excluir aluno :" + error);
        }
      })
    }
}
