import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamaraComponent } from './camara/camara.component';
import { WebcamModule } from 'ngx-webcam';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CamaraComponent,    
  ],
  imports: [
    CommonModule,
    WebcamModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    CamaraComponent
  ]
})
export class ComponentsModule { }
