import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataIntService {

  foto: string ='';
  acepta:boolean=false;
  cc: number=0;
  paciente_id:number=0;
  habitacion:number=0;

  constructor() { }
}
