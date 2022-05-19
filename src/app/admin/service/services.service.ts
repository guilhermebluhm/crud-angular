import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { modelProduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly API_GET : string = "/produto/listar"
  private readonly API_POST : string = "/produto/adicionar"
  private readonly API_UPDATE : string = "produto/atualizar"

  constructor(private http : HttpClient) { }

  public getAll(){
    return this.http.get<modelProduct[]>(this.API_GET)
  }

  public save(rcd: modelProduct){
    return this.http.post(this.API_POST,rcd)
  }

  public getElement(v: number){
    return this.http.get<modelProduct>(`${this.API_GET}/${v}`)
  }

  public updateElement(v: number, rcd : modelProduct){
    return this.http.put<modelProduct>(`${this.API_UPDATE}/${v}`,rcd)
  }
}
