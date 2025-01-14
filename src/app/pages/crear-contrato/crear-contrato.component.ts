import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ContratosService } from 'src/app/services/contratos.service';
import SwaggerUI from 'swagger-ui';
import * as yaml from 'js-yaml'; // Para procesar archivos YAML
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-crear-contrato',
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.css']
})
export class CrearContratoComponent {
  panelOpenState: boolean = false;
  archivos: any; // Arreglo para almacenar los archivos seleccionados
  formGroup: FormGroup;
  formGroupTitulo: FormGroup;
  private specData: any; // Variable para almacenar la especificación
  listaEndpoints: { method: string; path: string }[] = []; // Lista de endpoints dinámicos

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private http: HttpClient, private contratosService: ContratosService) {
    this.formGroupTitulo = this.fb.group({
      // Datos principales del contrato
      titulo: ['', Validators.required],
      descripcionTitulo: ['', Validators.required],
      urlTitulo: ['', Validators.required],
      descripcionUrlTitulo: ['', Validators.required],
    });
    this.formGroup = this.fb.group({
      // Path's
      endPoint: ['', Validators.required],
      peticion: ['', Validators.required],
      resumen: ['', Validators.required],
      descripcionPath: ['', Validators.required],
      // Respuestas dinámicas
      responses: this.fb.array([this.createResponseGroup()]),
    });
  }

  ngOnInit(): void {
    this.obtenerContratos();
  }

  obtenerContratos() {
    this.contratosService.obtenerLista().subscribe(lista => {
      this.archivos = lista
    })
  }

  // Función para inicializar Swagger UI con el contenido de un archivo
  initializeSwaggerUI(urlOrSpec: string | object) {
    console.log('Entre a SwaggerUI');
    setTimeout(() => {
      const container = document.getElementById('swagger-ui');
      if (!container) {
        console.error('No se encontró el contenedor con ID "swagger-ui"');
        return;
      }

      // Limpia el contenido del contenedor
      container.innerHTML = '';

      // Inicializa SwaggerUI
      SwaggerUI({
        domNode: container,
        spec: typeof urlOrSpec === 'object' ? urlOrSpec : undefined,
        url: typeof urlOrSpec === 'string' ? urlOrSpec : undefined,
        docExpansion: 'none',
        operationsSorter: 'alpha',
        deepLinking: true,
      });
    }, 0);
  }


  // Función para manejar la selección de archivos
  seleccionarArchivos(event: any) {
    console.log('entre a seleccionarArchivo: ', event);
    const archivoSeleccionado = event.value; // Obtenemos el archivo seleccionado

    if (archivoSeleccionado?.link) {
      this.cargarArchivo(archivoSeleccionado.link)
        .then((content) => {
          this.archivos.nombre = archivoSeleccionado; // Almacena el archivo seleccionado
          this.initializeSwaggerUI(content); // Renderiza SwaggerUI
          // Extraer datos y actualizar el formulario
          console.log('specData: ', this.specData);
          if (this.specData?.info) {
            this.formGroupTitulo.patchValue({
              titulo: this.specData.info.title || '',
              descripcionTitulo: this.specData.info.description || '',
              urlTitulo: this.specData.host + this.specData.basePath || '',
              descripcionUrlTitulo: 'Descripción generada automáticamente', // Ajusta según necesidad
            });
          }
          this.procesarListaDeEndpoints();
        })
        .catch((error) => {
          console.error('Error al cargar el archivo:', error);
          alert('No se pudo cargar el archivo. Verifique el formato o el contenido.');
        });
    } else {
      console.error('Archivo seleccionado no contiene un enlace válido.');
    }
  }

  cargarArchivo(link: string): Promise<object> {
    return new Promise((resolve, reject) => {
      this.http.get(link, { responseType: 'text' }).subscribe(
        (data: string) => {
          try {
            let parsedSpec: object;

            // Detectar formato (JSON o YAML) y convertirlo
            if (link.endsWith('.json')) {
              parsedSpec = JSON.parse(data);
              this.specData = parsedSpec;
            } else if (link.endsWith('.yaml') || link.endsWith('.yml')) {
              parsedSpec = yaml.load(data) as object;
              this.specData = parsedSpec;
            } else {
              throw new Error('Formato de archivo no soportado.');
            }

            resolve(parsedSpec);
          } catch (error) {
            reject(error);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
  procesarListaDeEndpoints(): void {
    console.log('Entre a procesar lista de endpoints')
    this.listaEndpoints = []; // Limpia la lista previa
    if (!this.specData || !this.specData.paths) {
      console.error('La especificación no contiene datos válidos.');
      return;
    }
  
    // Recorre los paths y métodos para llenar la lista
    for (const path of Object.keys(this.specData.paths)) {
      for (const method of Object.keys(this.specData.paths[path])) {
        this.listaEndpoints.push({ method, path });
      }
    }
  
    console.log('Lista de endpoints generada:', this.listaEndpoints);
  }

  seleccionarEndpoint(event: MatSelectChange): void {
    console.log('Entre a seleccionar endpoint')
    const { method, path } = event.value; // Obtener método y path del endpoint seleccionado
    this.extraerDatosEndpoint(path, method);
  }

  extraerDatosEndpoint(path: string, method: string): void {
    console.log('entre a extraer datos endpoint')
    const endpointData = this.specData?.paths?.[path]?.[method];
    console.log('Endpoint: ', endpointData);
    if (endpointData) {
      this.formGroup.patchValue({
        endPoint: path,
        peticion: method.toUpperCase(),
        resumen: endpointData.summary || '',
        descripcionPath: endpointData.description || '',
      });
  
      // Manejar respuestas
      this.responses.clear();
      const responses = Object.entries(endpointData.responses || {});
      responses.forEach(([code, response]: any) => {
        console.log('endpoint requestBody: ', response.requestBody);
        this.responses.push(
          this.fb.group({
            codeResponse: code,
            descripcionResponse: response.description || '',
            response: JSON.stringify(response, null, 2)
          })
        );
      });
    } else {
      console.error(`No se encontraron datos para ${method} ${path}`);
    }
  }

  // Metodos para los Formularios
  get responses(): FormArray {
    return this.formGroup.get('responses') as FormArray;
  }

  addResponse(): void {
    this.responses.push(this.createResponseGroup());
  }

  removeResponse(index: number): void {
    if (this.responses.length > 1) {
      this.responses.removeAt(index);
    }
  }

  createResponseGroup(): FormGroup {
    return this.fb.group({
      codeResponse: ['', Validators.required],
      descripcionResponse: ['', Validators.required],
      response: ['', Validators.required],
    });
  }
}