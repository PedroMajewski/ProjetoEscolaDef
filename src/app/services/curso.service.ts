import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  http = inject(HttpClient);
  APICurso = "http://localhost:8080/api/curso";

  constructor() { }

  save(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(this.APICurso+"/save", curso, {responseType: 'text' as 'json'});
  }

  update(curso:Curso, id: number): Observable<Curso>{
    return this.http.put<Curso>(this.APICurso+"/update/" + id, curso, {responseType: 'text' as 'json'});
  }

  deleteById(id: number): Observable<Curso>{
    return this.http.delete<Curso>(this.APICurso+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.APICurso+"/findById/"+id);
  }

  findAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.APICurso+"/findAll");
  }
}
