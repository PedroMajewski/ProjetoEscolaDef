import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { AlunoService } from '../../../services/aluno.service';
import { AlunoFormComponent } from "../aluno-form/aluno-form.component";
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-aluno-list',
  standalone: true,
  imports: [AlunoFormComponent, MdbModalModule],
  templateUrl: './aluno-list.component.html',
  styleUrl: './aluno-list.component.scss'
})
export class AlunoListComponent {
  listaAluno: Aluno[] = [];
  alunoEdit!: Aluno;

  alunoService = inject(AlunoService);
  

  @ViewChild("modalAlunoForm") modalAlunoForm!: TemplateRef<any>;
  modalService = inject(MdbModalService)
  modalRef!: MdbModalRef<any>;

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

    new(){ //Abre a função do new Aluno
      this.alunoEdit = new Aluno();
      this.modalRef = this.modalService.open(this.modalAlunoForm, { modalClass: 'modal-l'});
    }
  
    edit(aluno: Aluno){ //Abre a função do Edit passando o aluno selecionado
      this.alunoEdit = aluno;
      this.modalRef = this.modalService.open(this.modalAlunoForm, { modalClass: 'modal-l'});
    }
  
    meuEventoTratamento(mensagem:any){ //Realiza o FindAll e depois fecha a modal
      this.findAll();
      this.modalRef.close();
    }
}
