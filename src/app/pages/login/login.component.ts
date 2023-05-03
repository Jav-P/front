import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataIntService } from 'src/app/services/data-int.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  aceptar:boolean=this.dataInt.acepta;
  constructor(private dataInt:DataIntService, private router:Router) { }

  ngOnInit(): void {
  }

  irInicio(){
    this.router.navigate(['/inicio']);
  }

}
