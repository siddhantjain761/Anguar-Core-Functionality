import { BlogpostModule } from './blogpost/blogpost.module';
import { AboutComponent } from './cmspage/about/about.component';
import { ContactComponent } from './cmspage/contact/contact.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   {path:'blog',
    loadChildren:() =>import('./blogpost/blogpost.module').then(m => m.BlogpostModule)
  }    //lazy loading other module, load featured mogules only when hitting to there route



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
