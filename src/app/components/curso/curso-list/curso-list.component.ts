import { Component, inject } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../services/curso.service';

@Component({
  selector: 'app-curso-list',
  standalone: true,
  imports: [],
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.scss'
})
export class CursoListComponent {

  listaCurso: Curso[] = [];
  cursoEdit!: Curso;
  
  cursoService = inject(CursoService);

  constructor(){
    this.findAll();
  }

  findAll(){
        this.cursoService.findAll().subscribe({
          next: (listaRetornadaCurso) => {
            this.listaCurso = listaRetornadaCurso;
          },
          error: (error) => {
            alert('Erro ao carregar a lista de Alunos' + error);
          }
        });
      }
    
  delete(listaCurso: Curso){
        this.cursoService.deleteById(listaCurso.id).subscribe({
          next: (mensagemDelete) => {
            alert("Aluno deletado com sucesso!: " + mensagemDelete);
          },
          error: (error) =>{
            alert("Erro ao excluir aluno :" + error);
          }
        })
    }
}
