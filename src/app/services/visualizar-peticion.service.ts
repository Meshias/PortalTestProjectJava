import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn : 'root'})

export class VisualizarPeticionService {

    private datosSubject = new BehaviorSubject<{ archivo: string; peticion: string }>({
        archivo: '',
        peticion: ''
    });

    constructor() {}

    datos$ = this.datosSubject.asObservable();

    setDatos(archivo: string, peticion: string): void {
        this.datosSubject.next({ archivo, peticion });
    }

    obtenerDatos() {
        return this.datosSubject.value;
    }
}