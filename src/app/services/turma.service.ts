import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Turma } from '../models/turma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  http = inject(HttpClient);
  APITurma = "http://locahost:8080/api/turma";

  constructor() { }

  save(turma: Turma): Observable<Turma>{
    return this.http.post<Turma>(this.APITurma+"/save", turma, {responseType: 'text' as 'json'});
  }

  update(turma: Turma): Observable<Turma>{
    return this.http.put<Turma>(this.APITurma+"/update", turma, {responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<Turma>{
    return this.http.delete<Turma>(this.APITurma+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Turma>{
    return this.http.get<Turma>(this.APITurma+"/findById/"+id);
  }

  findAll(): Observable<Turma[]>{
    return this.http.get<Turma[]>(this.APITurma+"/findAll");
  }
}
