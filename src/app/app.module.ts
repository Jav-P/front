import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CamaraComponent } from './components/camara/camara.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CamaraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
