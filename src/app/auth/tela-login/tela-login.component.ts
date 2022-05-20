import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AuthServService } from '../service/auth-serv.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent {

  form : FormGroup

  constructor(private frb : FormBuilder, private serv: AuthServService) { 
    this.form = this.frb.group({
      login: [{value:"teste@unifor.br",disabled:true}, Validators.required, Validators.email],
      password: ["",[Validators.required,Validators.minLength(6)]]
    })
  }

  acaoLogin(){
    if(this.form.valid){
      // do something
      console.log("fui clicado - acao login")
      this.serv.acaoLoginService(this.form.value)
    }
  }
}
