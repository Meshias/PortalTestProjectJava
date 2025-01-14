import { ChangeDetectionStrategy, Component , HostListener, SimpleChanges} from '@angular/core';
import { Menu, Submenu } from './../interfaces/menu-nav';
import { Router } from '@angular/router';
import { MenuService } from './../services/menu-nav.service';
import { VisualizarPeticionService } from './../services/visualizar-peticion.service';
import { SUBMENU } from './../JSON/menu-nav.json';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent { 
  title = 'layout-component';
  isMobile = window.innerWidth <= 600;

  menu : Menu[] = [];
  submenu :  Submenu[] = [];
  activeMenuIndex: number | null = null; // Índice del menú activo
  menu2: any[] = [
    {
      module: true, title: 'Modulo de autenticación',  icono : 'home' , list: [
        {
          active: false, title: 'Autenticación de Usuario | Token', request: 'POST',
          dataRequest: {
            title: 'Autenticación de Usuario | Token',
            description: 'La aplicación realiza una solicitud al endpoint del token agregando los siguientes parámetros que se describen a continuación\n',
  
            url: "http://localhost:4200/assets/oath2.json"
          }
        },
      ]
    },
    {
      module: true, title: 'Modulo Firma Documentos',  icono : 'assignment_turned_in'  , list: [
        {
          active: false, title: 'Revisión de documentos', request: 'POST', dataRequest: {
            title: 'Revisión de documentos',
            description: 'Se solicita la revision de un documento con sus detalles para dicha revison.',
            url: "http://localhost:4200/assets/swagger.json"
          }
        },
        // { active: false, title: 'Cargar Firmantes', request: 'POST' },
        // { active: false, title: 'Consultar Documentos', request: 'GET' },
      ]
    },
  ];
  oldSelection: number[] = [];
  currentSelection: any = {};
  constructor(private router : Router, private menuService : MenuService, private visualizarPeticionService : VisualizarPeticionService) {}



  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth <= 600;
  }

  ngOnInit(): void {
    this.obtenerMenu();
    this.currentSelection = this.menu2[0].list[0];
  }

  toggleActive(module: number, item: number): boolean {
    /* desabilita el elemento que se ha pulsado anteriormente */
    if(this.oldSelection.length >= 1) {
      this.menu2[this.oldSelection[0]].list[this.oldSelection[1]].active = false;
    }
    /* guarda el indice del elemento que se ha pulsado */
    this.oldSelection = [module, item];

    /* actualiza el contenido que se ha pulsado */
    this.currentSelection = this.menu2[module].list[item];
    /* activa el elemento que se ha pulsado */
    return this.menu2[module].list[item].active = true;
  }

  // obtenerMenu() {
  //   this.menuService.getMenu().subscribe(menu => {
  //     this.menu = menu
  //     console.log('menu: ', this.menu);
  //   })
  // }

  // obtenerSubmenu(nombre : string) {
  //   this.menuService.getSubmenu(nombre).subscribe(sub => {
  //     this.submenu = sub || [];
  //     console.log('submenu: ', this.submenu);
  //   })
  // }

  obtenerMenu(): void {
    this.menuService.getMenu().subscribe(menu => {
      this.menu = menu;
      console.log('menu: ', this.menu);
    });
  }

  toggleSubmenu(index: number, nombre: string): void {
    if (this.activeMenuIndex === index) {
      // Si el mismo índice está activo, colapsa el menú
      this.activeMenuIndex = null;
      this.submenu = [];
    } else {
      // Activa el nuevo índice y carga el submenú
      this.activeMenuIndex = index;
      this.obtenerSubmenu(nombre);
    }
  }

  obtenerSubmenu(nombre: string): void {
    this.menuService.getSubmenu(nombre).subscribe(sub => {
      this.submenu = sub || [];
      console.log('submenu: ', this.submenu);
    });
  }

  regresar_avanzar(opcion : string) {
    this.router.navigate([opcion])
  }

  visualizarPeticion(opcion: Submenu) {
    console.log('Opcion seleccionada: ', opcion);
    this.visualizarPeticionService.setDatos(opcion.linkSub, opcion.tipoPeticion);
    this.router.navigate(['/test/visualizar-contrato']);
  }

}
