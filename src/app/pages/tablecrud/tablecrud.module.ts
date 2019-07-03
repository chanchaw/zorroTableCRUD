import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TablecrudRoutingModule } from './tablecrud-routing.module';
import { TablecrudComponent } from './tablecrud.component';

import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [TablecrudComponent],
  imports: [
    CommonModule,
    TablecrudRoutingModule,NgZorroAntdModule,FormsModule,ReactiveFormsModule
  ]
})
export class TablecrudModule { }
