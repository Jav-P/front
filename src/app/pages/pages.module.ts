import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SalidaComponent } from './salida/salida.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    HomeComponent,
    SalidaComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    InicioComponent,
    HomeComponent,
  ]
})
export class PagesModule { }
