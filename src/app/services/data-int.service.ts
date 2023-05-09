import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataIntService {

  foto: string ='';
  acepta:boolean=false;
  cc: number;

  constructor() { }
}
