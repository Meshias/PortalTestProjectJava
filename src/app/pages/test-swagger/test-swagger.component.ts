import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import * as yaml from 'js-yaml'; // Para procesar archivos YAML
import { createRoot } from 'react-dom/client';


@Component({
  selector: 'app-test-swagger',
  templateUrl: './test-swagger.component.html',
  styleUrls: ['./test-swagger.component.css']
})
export class TestSwaggerComponent {
  panelOpenState : boolean = false;
  archivos: any[] = []; // Arreglo para almacenar los archivos seleccionados

  constructor(private cdr: ChangeDetectorRef) {}

  // Función para inicializar Swagger UI con el contenido de un archivo
  initializeSwaggerUI(urlOrSpec: string | object, index: number) {
    // Usar un timeout para esperar al renderizado del DOM
    setTimeout(() => {
      const container = document.getElementById(`swagger-container-${index}`);
      if (!container) {
        console.error(`No se encontró el contenedor para el índice ${index}`);
        return;
      }

      // Limpia el contenido del contenedor
      container.innerHTML = '';

      // Configura Swagger UI con la URL o especificación (JSON/YAML)
      SwaggerUI({
        domNode: container,
        spec: typeof urlOrSpec === 'object' ? urlOrSpec : undefined,
        url: typeof urlOrSpec === 'string' ? urlOrSpec : undefined,
        docExpansion: 'none',
        operationsSorter: 'alpha',
        deepLinking: true,
      });
    }, 0); // Ejecutar después del siguiente ciclo de renderizado
  }

  // Función para manejar la selección de archivos
  seleccionarArchivos(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const files = Array.from(input.files);
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = (e: ProgressEvent<FileReader>) => {
          const content = e.target?.result as string;

          try {
            let parsedSpec: object;
            // Detecta si el archivo es JSON o YAML y lo convierte en objeto
            if (file.name.endsWith('.json')) {
              parsedSpec = JSON.parse(content);
            } else if (file.name.endsWith('.yaml') || file.name.endsWith('.yml')) {
              parsedSpec = yaml.load(content) as object;
            } else {
              throw new Error('Formato de archivo no soportado.');
            }

            // Agregar archivo al arreglo 'archivos'
            this.archivos.push({
              name: file.name,
              size: file.size,
              content: parsedSpec
            });

            // Detectar cambios en la vista y esperar al renderizado del DOM
            this.cdr.detectChanges();

            // Inicializa Swagger UI con el contenido procesado para el archivo específico
            this.initializeSwaggerUI(parsedSpec, this.archivos.length - 1);
          } catch (error) {
            console.error('Error parsing the file:', error);
            alert('No se pudo procesar el archivo seleccionado. Verifique el formato.');
          }
        };
        reader.readAsText(file);
      });
    }
  }

  borrarArchivos() {
    this.archivos = [];
  }

}


// export const menu: any[] = [
//   {
//     module: true, title: 'Modulo de autenticación', list: [
//       { active: false, title: 'Autenticación de Usuario | Token', request: 'POST',
//          dataRequest: {
//           title: 'Autenticación de Usuario | Token',
//           description: 'La aplicación realiza una solicitud al endpoint del token agregando los siguientes parámetros que se describen a continuación\n',
//           url: "http://localhost:4200/assets/oath2.json"
//          } },
//     ]
//   },
//   {
//     module: true, title: 'Modulo Firma Documentos', list: [
//       { active: false, title: 'Revisión de documentos', request: 'POST' , dataRequest: {
//         title: 'Revisión de documentos',
//         description: 'Se solicita la revision de un documento con sus detalles para dicha revison.',
 
//         url: "http://localhost:4200/assets/swagger.json"
//       } },
//       { active: false, title: 'Cargar Firmantes', request: 'POST' },
//       { active: false, title: 'Consultar Documentos', request: 'GET' },
//     ]
//   },
// ];