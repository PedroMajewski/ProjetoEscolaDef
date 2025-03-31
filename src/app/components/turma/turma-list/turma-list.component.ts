import { Component, inject } from '@angular/core';
import { Turma } from '../../../models/turma';
import { TurmaService } from '../../../services/turma.service';

@Component({
  selector: 'app-turma-list',
  standalone: true,
  imports: [],
  templateUrl: './turma-list.component.html',
  styleUrl: './turma-list.component.scss'
})
export class TurmaListComponent {

  ListaTurma: Turma[] = [];
  TurmaEdit!: Turma[];

  turmaService = inject(TurmaService);

  constructor(){
    this.findAll();
  }

  findAll(){
        this.turmaService.findAll().subscribe({
              next: (listaRetornadaTurma) => {
                this.ListaTurma = listaRetornadaTurma;
              },
              error: (error) => {
                alert('Erro ao carregar a lista de turmas' + error);
              }
            });
  }
        
    delete(listaTurma: Turma){
        this.turmaService.deleteById(listaTurma.id).subscribe({
              next: (mensagemDelete) => {
                alert("Turma deletado com sucesso!: " + mensagemDelete);
              },
              error: (error) =>{
                alert("Erro ao excluir turma :" + error);
              }
            })
    }
}
