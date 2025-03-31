import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { ActivatedRoute, Router } from '@angular/router';
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

    @Input("aluno") aluno: Aluno = new Aluno();
    @Output("meuEvento") meuEvento = new EventEmitter();
  
    listaAluno!: Aluno[];
    RotaAtiva = inject(ActivatedRoute);
    Roteador = inject(Router);
    alunoService = inject(AlunoService);

    constructor(){
      let id = this.RotaAtiva.snapshot.params['id'];
      if(id){
        this.findById(id);
      }
    }

    findById(id: number){
      this.alunoService.findById(id).subscribe({
        next: (alunoRetorno) => {
          this.aluno = alunoRetorno;
        },
        error: (error) => {
          alert("Ocorreu um erro ao buscar o id: " + error);
        }
      })
    }
    
  
   save(aluno: Aluno){
    if(this.aluno.id > 0){ //Condição para UPDATE
      this.alunoService.update(this.aluno, this.aluno.id).subscribe({
        next: (alunoMensagem) => {
          alert(alunoMensagem);
          this.Roteador.navigate(["/principal/aluno"]);
          this.meuEvento.emit("OK")
        },
        error: (error) => {
          alert("Erro ao atualizar aluno: " + error);
        }
      })
    }else{
      this.alunoService.save(this.aluno).subscribe({
        next: (alunoMensagem) => {
          alert(alunoMensagem)
          this.Roteador.navigate(["/principal/aluno"]);
          this.meuEvento.emit("OK")
        },
        error: (error) => {
          alert("Erro ao salvar aluno : " + error)
        }
      })
    }
   }

   reloadList(){
    this.alunoService.findAll().subscribe({
      next: (alunoLista) => {
        this.listaAluno = alunoLista;
      },
      error: (error) => {
        alert("Erro ao recarregar a lista: " + error);
      }
    })
   }
}
