import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmspageRoutingModule } from './cmspage-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    CmspageRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
   exports:[
    AboutComponent

   ]
})
export class CmspageModule { }
