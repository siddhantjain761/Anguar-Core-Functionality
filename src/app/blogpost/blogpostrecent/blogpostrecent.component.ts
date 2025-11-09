import { BlogpostService } from './../blogpost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpostrecent',
  templateUrl: './blogpostrecent.component.html',
  styleUrls: ['./blogpostrecent.component.css']
})
export class BlogpostrecentComponent implements OnInit {
  blogdata:any;
  constructor(private BlogpostService:BlogpostService) { }

  ngOnInit(): void {
    this.BlogpostService.blog_feature().subscribe((result)=>{
      this.blogdata = result.blog_data;
      console.log(this.blogdata)
    });
  }

}
