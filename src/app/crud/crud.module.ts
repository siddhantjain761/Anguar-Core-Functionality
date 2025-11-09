import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { AddblogComponent } from './addblog/addblog.component';
import { DisplayblogComponent } from './displayblog/displayblog.component';


@NgModule({
  declarations: [
    AddblogComponent,
    DisplayblogComponent
  ],
  imports: [
    CommonModule,
    CrudRoutingModule
  ]
})
export class CrudModule { }
