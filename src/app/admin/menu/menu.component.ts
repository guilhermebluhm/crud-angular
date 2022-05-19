import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { modelProduct } from '../model/product';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  displayedColumns = ['id','nome','acoes']

  public listaProdutos : Observable<modelProduct[]>

  constructor(private serv : ServicesService,
    private roteamento : Router,
    private localAtual : ActivatedRoute) {

    this.listaProdutos = this.serv.getAll()

  }

  adicionar(){
    this.roteamento.navigate(['criar'],{relativeTo: this.localAtual})
  }

  editar(v: number){

    console.log(v)
    this.roteamento.navigate([`${'editar'}/${v}`],{relativeTo: this.localAtual})
  }
}
