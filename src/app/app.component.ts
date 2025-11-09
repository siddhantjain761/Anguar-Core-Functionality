import { CmspageModule } from './cmspage/cmspage.module';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularblog';
  constructor(public r:Router){}
}
