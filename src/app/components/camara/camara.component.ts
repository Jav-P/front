import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam/public_api';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.css']
})
export class CamaraComponent implements OnInit {

  constructor() { }
  stream: any = null;
  trigger: Subject<void>= new Subject();
  imagen:string='';

  get $trigger():Observable<void>{
    return this.trigger.asObservable();
  }
  ngOnInit(): void {}  
  snapshot(event: any){
    console.log(event); 
    this.imagen= event.imageAsDataUrl;   
    console.log(this.imagen);
    
  }
  acceder_camara(){
    navigator.mediaDevices.getUserMedia().then(res =>{
      console.log(res);
      this.stream=res;
      }
    ).catch((error)=>{
      console.log(error);      
    })
  }
  tomarFoto(){
    this.trigger.next()
  }

}
