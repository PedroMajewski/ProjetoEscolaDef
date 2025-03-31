import { Component, inject } from '@angular/core';
import { Professor } from '../../../models/professor';
import { ProfessorService } from '../../../services/professor.service';

@Component({
  selector: 'app-professor-list',
  standalone: true,
  imports: [],
  templateUrl: './professor-list.component.html',
  styleUrl: './professor-list.component.scss'
})
export class ProfessorListComponent {

  listaProfessor: Professor[] = [];
  professorEdit!: Professor;

  professorService = inject(ProfessorService);
  
  constructor(){
    this.findAll();
  }

  findAll(){
          this.professorService.findAll().subscribe({
            next: (listaRetornadaProfessor) => {
              this.listaProfessor = listaRetornadaProfessor;
            },
            error: (error) => {
              alert('Erro ao carregar a lista de Professores' + error);
            }
          });
    }
      
  delete(listaProfessor: Professor){
          this.professorService.deleteById(listaProfessor.id).subscribe({
            next: (mensagemDelete) => {
              alert("Professor deletado com sucesso!: " + mensagemDelete);
            },
            error: (error) =>{
              alert("Erro ao excluir professor :" + error);
            }
          })
  }
}
