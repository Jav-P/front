import { Component, OnInit } from '@angular/core';
import { BackService } from 'src/app/services/back.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private backService: BackService) { }

  ngOnInit(): void {
  }

  buscar(){
    let pacientes = this.backService.getPacientes();
    // let paciente = pacientes.Pacientes.filter( item => item.cc_paciente == cc)
  }

}
