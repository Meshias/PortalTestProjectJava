import { ChangeDetectorRef, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { VisualizarPeticionService } from 'src/app/services/visualizar-peticion.service';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-visualizar-contrato',
  templateUrl: './visualizar-contrato.component.html',
  styleUrls: ['./visualizar-contrato.component.css']
})
export class VisualizarContratoComponent {
  @ViewChild('swaggerContainer', { static: false }) swaggerContainer!: ElementRef<HTMLDivElement>;
  @Input() specUrl: string = ''; // URL por defecto

  private swaggerInitialized = false;

  constructor(private visualizarPeticionService :  VisualizarPeticionService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.visualizarPeticionService.datos$.subscribe(datos => {
      console.log('Datos actualizados: ', datos);
      this.specUrl = datos.archivo;
      this.initializeSwaggerUI();
    });
  }  

  ngAfterViewInit() {
    this.initializeSwaggerUI();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['specUrl'] && !changes['specUrl'].isFirstChange()) {
      this.initializeSwaggerUI();
    }
  }

  private initializeSwaggerUI(): void {
    if (this.swaggerContainer) {
      const container = this.swaggerContainer.nativeElement;
      container.innerHTML = ''; // Limpia cualquier contenido previo
      SwaggerUI({
        url: this.specUrl,
        domNode: container,
        deepLinking: true
      });
      this.swaggerInitialized = true;
      this.cdr.detectChanges();
    }
  }
}
