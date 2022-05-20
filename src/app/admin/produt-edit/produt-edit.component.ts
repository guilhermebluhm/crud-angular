import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { modelProduct } from '../model/product';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-produt-edit',
  templateUrl: './produt-edit.component.html',
  styleUrls: ['./produt-edit.component.css']
})
export class ProdutEditComponent implements OnInit{

  value_rota : number = this.posicaoRota.snapshot.params['id']

  form : FormGroup

  constructor(private srv : ServicesService, private posicaoRota : ActivatedRoute, private rota : Router, private frm : FormBuilder) {
    this.form = this.frm.group({
      id: [null],
      nome: [null]
    })
  }
  ngOnInit(): void {
    this.srv.getElement(this.value_rota).subscribe(x => {
      this.carregarDados(x)
    })
  }

  carregarDados(v : modelProduct){
    this.form.patchValue({
      nome : v.nome
    })
  }

  atualizar(){
    this.srv.updateElement(this.value_rota,this.form.value).subscribe(x => {console.log(x)})
  }

  retornar(){
    this.rota.navigate(['auth-login'])
  }

}
