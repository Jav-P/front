import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private alertSource = new Subject()
  alert$ = this.alertSource.asObservable()

  constructor() { }

  showAlert(message: string, tipo: string, time: number = 6500){
    this.alertSource.next({message, tipo, time})
  }
}
