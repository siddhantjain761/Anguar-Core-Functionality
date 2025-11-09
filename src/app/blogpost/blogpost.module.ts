import { AboutComponent } from './../cmspage/about/about.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogdetailesComponent } from './blogdetailes/blogdetailes.component';
import { BlogfeaturedComponent } from './blogfeatured/blogfeatured.component';
import { BlogpostrecentComponent } from './blogpostrecent/blogpostrecent.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    BloglistComponent,
    BlogdetailesComponent,
    BlogfeaturedComponent,
    BlogpostrecentComponent,
    CategoriesComponent,

  ],
  imports: [
    CommonModule,
    BlogpostRoutingModule
  ],
  exports:[
    BlogfeaturedComponent,
    BloglistComponent,
    BlogdetailesComponent,
    BlogpostrecentComponent,
    CategoriesComponent,

  ]

})
export class BlogpostModule { }
