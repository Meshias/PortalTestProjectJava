import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'; 
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestSwaggerComponent } from './pages/test-swagger/test-swagger.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TestDocumentationComponent } from './pages/test-documentation/test-documentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './pages/components/footer/footer.component';
import { CrearContratoComponent } from './pages/crear-contrato/crear-contrato.component';
import { VisualizarContratoComponent } from './pages/visualizar-contrato/visualizar-contrato.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TestSwaggerComponent,
    AboutUsComponent,
    DashboardComponent,
    TestDocumentationComponent,
    FooterComponent,
    CrearContratoComponent,
    VisualizarContratoComponent,
    LoginComponent, 
    LayoutComponent
  ],
  imports: [
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
