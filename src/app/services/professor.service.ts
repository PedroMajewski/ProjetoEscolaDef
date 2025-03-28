import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Professor } from '../models/professor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  http = inject(HttpClient);
  APIProfessor = "http://locahost:8080/api/professor";

  constructor() { }

  save(professor: Professor): Observable<Professor>{
    return this.http.post<Professor>(this.APIProfessor+"/save", professor, {responseType: 'text' as 'json'});
  }

  update(professor: Professor): Observable<Professor>{
    return this.http.put<Professor>(this.APIProfessor+"/update", professor, {responseType: 'text' as 'json'});
  } 

  deleteById(id: number): Observable<Professor>{
    return this.http.delete<Professor>(this.APIProfessor+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Professor>{
    return this.http.get<Professor>(this.APIProfessor+"/findById/"+id);
  }

  findAll(): Observable<Professor[]>{
    return this.http.get<Professor[]>(this.APIProfessor+"/findAll");
  }
  
}
