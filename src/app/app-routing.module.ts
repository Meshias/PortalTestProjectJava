import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestSwaggerComponent } from './pages/test-swagger/test-swagger.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { TestDocumentationComponent } from './pages/test-documentation/test-documentation.component';
import { CrearContratoComponent } from './pages/crear-contrato/crear-contrato.component';
import { VisualizarContratoComponent } from './pages/visualizar-contrato/visualizar-contrato.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
    { path: 'inicio', component: DashboardComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'test/swagger-test', component: TestSwaggerComponent },
    { path: 'test/documentation-test', component: TestDocumentationComponent },
    { path: 'contrato/crear-editar', component: CrearContratoComponent },
    { path: 'test/visualizar-contrato', component: VisualizarContratoComponent },
    { path: '', redirectTo: 'inicio', pathMatch: 'full',  },
  ]},
 
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full',  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
