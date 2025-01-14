import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LISTA_CONTRATO } from "../JSON/lista-contratos.json";

@Injectable({ providedIn : 'root'})

export class ContratosService {

    constructor(private http : HttpClient) {}

    obtenerLista () : Observable<any[]> {
        return of(LISTA_CONTRATO);
    }
}