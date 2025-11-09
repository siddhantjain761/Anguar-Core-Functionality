import { BlogpostService } from './../blogpost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogfeatured',
  templateUrl: './blogfeatured.component.html',
  styleUrls: ['./blogfeatured.component.css']
})
export class BlogfeaturedComponent implements OnInit {

  blogdata:any
  constructor(private BlogpostService:BlogpostService) { }

  ngOnInit(): void {
    this.BlogpostService.blog_feature().subscribe((result)=>{
      /* console.log(result */
      this.blogdata = result.blog_data;
      /* console.log(this.blogdata) */

    })
  }

}
