import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Visitante } from 'src/app/models/model';
import { BackService } from 'src/app/services/back.service';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  constructor(private infoService:DataIntService, private router:Router, private backService:BackService) { }

  cc:number;
  visitante1:Login = new Login();
  visitante:Visitante = new Visitante();
  ngOnInit(): void {
  }

  SaleVisitante(){
    if(this.infoService.foto===""){
      console.log("Dale que si");   
      return   
    }else{
      this.visitante1.foto=this.infoService.foto;
      this.visitante1.cc_visitante=this.cc
      
      this.backService.getVisitantes().subscribe((vist)=>{
        let visitanteBuscado=vist.Visitantes.filter((visitante)=>{
          return visitante.cc_visitante===this.cc; 
        })       
        
        if (visitanteBuscado.length === 1) {
          if (visitanteBuscado[0].estado!=='Adentro') {
            console.log("Alerta: Ya estaba afuera");   
            return         
          }
          this.visitante1.id=visitanteBuscado[0].id 

          this.visitante.id=visitanteBuscado[0].id
          this.visitante=visitanteBuscado[0]          

          this.backService.loginVisitante(this.visitante1).subscribe(res => {   
            // console.log(res);
                     
            if(res.datos>0){
              this.visitante.estado="Afuera";
              // console.log(this.visitante);              

              // Acá deben estar los pacientes y todo lo demas

              this.backService.editVisitante(this.visitante, this.visitante.id).subscribe(ed => {
                // console.log(ed);                
              })
              // console.log("El valor es "+res.datos);               
            }else{
              console.log("Alerta: No coincide la persona ingresanda con la registrada");              
            }
          })
                   
        }else{
          console.log("Alerta: Visitante no fue encontrado");        
        }
      })     
      
    }  
    if (this.infoService.acepta){
      this.irInicio()  
    }
  }

  irInicio(){
    this.router.navigate(['']);
  }

}
