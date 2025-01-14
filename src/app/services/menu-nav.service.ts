import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Menu, Submenu } from "../interfaces/menu-nav";
import { MENU, SUBMENU } from "../JSON/menu-nav.json";

@Injectable({ providedIn: 'root' })

export class MenuService {

    constructor(private http : HttpClient) {}

    getMenu() : Observable<Menu[]> {
        return of(MENU);
    }

    getSubmenu(nombre: string): Observable<Submenu[]> {
        return of(SUBMENU.filter(sub => sub.menu.nombre === nombre));
    }    
}