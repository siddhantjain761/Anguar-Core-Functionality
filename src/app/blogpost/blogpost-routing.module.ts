


import { CategoriesComponent } from './categories/categories.component';
import { BlogpostrecentComponent } from './blogpostrecent/blogpostrecent.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogfeaturedComponent } from './blogfeatured/blogfeatured.component';
import { BlogdetailesComponent } from './blogdetailes/blogdetailes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'',component:BloglistComponent,
    children:[
      {path:'blog1',component:BloglistComponent}
    ]
  },
  {path:'/blog2',component:BloglistComponent},
  {path:'blogdetail/:id',component:BlogdetailesComponent},
  {path: 'blogfeature',component: BlogfeaturedComponent},
  {path:'blogpostrecent',component:BlogpostrecentComponent},
  {path:'categories',component:CategoriesComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogpostRoutingModule { }
