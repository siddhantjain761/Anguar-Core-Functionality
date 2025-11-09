import { CmspageService } from './../cmspage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutdata:any;
  constructor(private CmspageService:CmspageService ) {}

  ngOnInit(): void {
    this.CmspageService.about_data().subscribe((result)=>{
     /*  console.log(result) */
      this.aboutdata=result.c_data,
      console.log(this.aboutdata)
    });
  }

}
