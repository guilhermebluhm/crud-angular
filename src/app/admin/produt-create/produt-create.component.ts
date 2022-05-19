import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-produt-create',
  templateUrl: './produt-create.component.html',
  styleUrls: ['./produt-create.component.css']
})
export class ProdutCreateComponent {

  formulario : FormGroup

  constructor(private serv: ServicesService, private frm : FormBuilder, private roteamento : Router, private posicaoAtual : ActivatedRoute) {

      this.formulario = this.frm.group({
        nome: [null]
      })
  }

  adicionarProduto(){
    this.serv.save(this.formulario.value).subscribe(x => console.log(x))
    this.cancelarAcao()
  }

  cancelarAcao(){
    this.roteamento.navigate([''],{relativeTo: this.posicaoAtual})
  }

}
