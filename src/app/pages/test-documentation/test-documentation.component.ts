import { AfterViewInit, Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import * as yaml from 'js-yaml'; // Para procesar archivos YAML
import { createRoot } from 'react-dom/client';


@Component({
  selector: 'app-test-documentation',
  templateUrl: './test-documentation.component.html',
  styleUrls: ['./test-documentation.component.css']
})
export class TestDocumentationComponent implements AfterViewInit, OnChanges  {
  @ViewChild('swaggerContainer', { static: false }) swaggerContainer!: ElementRef<HTMLDivElement>;
  @Input() specUrl: string = 'assets/petstore.yml'; // URL por defecto

  private swaggerInitialized = false;

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
    }
  }
   
}