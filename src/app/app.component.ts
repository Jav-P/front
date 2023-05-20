import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  showAlertError=false
  showAlertSucces=false
  showAlertAlert=false
  message=''

  constructor(private alerta:AlertService){}

  ngOnInit(){
   this.alerta.alert$.subscribe((res:any)=>{
    // console.log(res);
    if (res.tipo==="error") {
      this.showAlertError=true      
      this.message=res.message
    }else if(res.tipo==="alerta"){
      this.showAlertAlert=true      
      this.message=res.message
    }else{
      this.showAlertSucces=true      
      this.message=res.message
    }
    setTimeout(()=> {
      this.showAlertError=false
      this.showAlertSucces=false
      this.showAlertAlert=false
    }, res.time)
   })
  }
}
