import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habitacion, Paciente, Piso, Visitante } from '../models/model';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackService {

  private apiUrl: string = 'http://127.0.0.1:8000/CRUD'

  constructor(private http : HttpClient) { }

  // Get

  getVisitantes(): Observable<Visitante[]>{
    const url = `${this.apiUrl}/visitantes/`;
    return this.http.get<Visitante[]>(url);
  }
  getHabitaciones(): Observable<Habitacion[]>{
    const url = `${this.apiUrl}/habitaciones/`;
    return this.http.get<Habitacion[]>(url);
  }
  getPacientes(): Observable<Paciente[]>{
    const url = `${this.apiUrl}/pacientes/`;
    return this.http.get<Paciente[]>(url);
  }
  getPisos(): Observable<Piso[]>{
    const url = `${this.apiUrl}/pisos/`;
    return this.http.get<Piso[]>(url);
  }

  // Get ID
  getVisitantesID( id: number):Observable<Visitante>{
    const url = `${this.apiUrl}/visitantes/${id}`;
    return this.http.get<Visitante>(url);
  }
  getHabitacionesID( id: number):Observable<Visitante>{
    const url = `${this.apiUrl}/habitaciones/${id}`;
    return this.http.get<Visitante>(url);
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
    const url = `${this.apiUrl}/pisos/`;    
    return this.http.post(url,piso) 
  }

  // Delete
  deletePiso(id:number): Observable<object>{
    const url = `${this.apiUrl}/pisos/${id}`;
    return this.http.delete(url)
  }
}