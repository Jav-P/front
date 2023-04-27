import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Habitacion, MensajeHabitacion, MensajeHabitacionID, MensajePaciente, MensajePiso, MensajeVisitante, Paciente, Piso, Visitante } from '../models/model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private apiUrl: string = 'http://127.0.0.1:8000/CRUD'
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http : HttpClient) { }

  // Get

  getVisitantes(): Observable<MensajeVisitante>{
    const url = `${this.apiUrl}/visitantes/`;
    return this.http.get<MensajeVisitante>(url);
  }
  getHabitaciones(): Observable<MensajeHabitacion>{
    const url = `${this.apiUrl}/habitaciones/`;
    return this.http.get<MensajeHabitacion>(url);
  }
  getPacientes(): Observable<MensajePaciente>{
    const url = `${this.apiUrl}/pacientes/`;
    return this.http.get<MensajePaciente>(url);
  }
  getPisos(): Observable<MensajePiso>{
    const url = `${this.apiUrl}/pisos/`;
    return this.http.get<MensajePiso>(url);
  }

  // Get ID
  getVisitantesID( id: number):Observable<Visitante>{
    const url = `${this.apiUrl}/visitantes/${id}`;
    return this.http.get<Visitante>(url);
  }
  getHabitacionesID( id: number):Observable<MensajeHabitacionID>{
    const url = `${this.apiUrl}/habitaciones/${id}`;
    return this.http.get<MensajeHabitacionID>(url);
  }
  getPacientesID( id: number):Observable<Visitante>{
    const url = `${this.apiUrl}/pacientes/${id}`;
    return this.http.get<Visitante>(url);
  }
  getPisosID( id: number):Observable<Visitante>{
    const url = `${this.apiUrl}/pisos/${id}`;
    return this.http.get<Visitante>(url);
  }

  // Post
  addVisitante(visitante:Visitante): Observable<object>{
    const url = `${this.apiUrl}/addC`;
   return this.http.post(url,visitante) 
  }
  addPiso(piso:Piso): Observable<object>{
    const body = {num_piso:piso.num_piso}
    const url = `${this.apiUrl}/pisos/`;    
    return this.http.post(url,body,{headers: this.httpHeaders}) 
  }

  // Delete
  deletePiso(id:number): Observable<object>{
    const url = `${this.apiUrl}/pisos/${id}`;
    return this.http.delete(url)
  }
}