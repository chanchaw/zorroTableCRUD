import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablecrudComponent } from './tablecrud.component';

const routes: Routes = [
  { path:'',component:TablecrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablecrudRoutingModule { }
