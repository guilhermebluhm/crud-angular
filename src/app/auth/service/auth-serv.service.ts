import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { modelCredencial } from '../model/credencial.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServService {

  private acaoEstadoLogin = new BehaviorSubject<boolean>(false)
  estadoLogin$ = this.acaoEstadoLogin.asObservable()

  constructor(private roteamento : Router) { }

  acaoLoginService(rcd : modelCredencial){
    localStorage.setItem("token",rcd.password)
    this.acaoEstadoLogin.next(true)
    this.roteamento.navigate(["auth-login"])
  }
}
