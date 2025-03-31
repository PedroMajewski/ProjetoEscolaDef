import { Aluno } from "./aluno";
import { Curso } from "./curso";
import { Professor } from "./professor";

export class Turma {
    id!: number;
    nome!: string;
    semestre!: string;
    ano!: string;
    turno!: string;
    Aluno!: string[];
    Curso!: string;
    Professor!: string;
}
