import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  http = inject(HttpClient);
  APIAluno = "http://localhost:8080/api/aluno";

  constructor() { }

  save(aluno: Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.APIAluno+"/save", aluno, {responseType: 'text' as 'json'});
  }

  update(aluno: Aluno, id: number): Observable<Aluno>{
    return this.http.put<Aluno>(this.APIAluno+"/update/"+ id, aluno, {responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<Aluno>{
    return this.http.delete<Aluno>(this.APIAluno+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.APIAluno+"/findById/"+id);
  }

  findAll(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.APIAluno+"/findAll");
  }
}
