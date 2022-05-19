import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProdutCreateComponent } from './produt-create/produt-create.component';
import { ProdutEditComponent } from './produt-edit/produt-edit.component';

const routes: Routes = [
  {
    path: '', component: MenuComponent
  },
  {
    path: 'criar', component: ProdutCreateComponent
  },
  {
    path: 'editar/:id', component: ProdutEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
