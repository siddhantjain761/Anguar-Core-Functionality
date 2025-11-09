import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddblogComponent } from './addblog/addblog.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AddblogComponent,
    AddcategoryComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
