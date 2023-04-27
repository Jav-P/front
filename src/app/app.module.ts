import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CamaraComponent } from './components/camara/camara.component';
import { WebcamModule } from 'ngx-webcam';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from "@angular/common/http";
import { InicioComponent } from './pages/inicio/inicio.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CamaraComponent,
    RegisterComponent,
    InicioComponent,
    FiltroPipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
