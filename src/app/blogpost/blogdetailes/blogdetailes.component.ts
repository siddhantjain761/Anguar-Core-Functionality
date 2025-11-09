import { Subscriber } from 'rxjs';
import { BlogpostService } from './../blogpost.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blogdetailes',
  templateUrl: './blogdetailes.component.html',
  styleUrls: ['./blogdetailes.component.css']
})
export class BlogdetailesComponent implements OnInit {
id:any;
blogview:any;
view:any;
  constructor(private BlogpostService:BlogpostService,private activerouter:ActivatedRoute,private Router:Router) { }

  ngOnInit(): void {
    this.id = this.activerouter.snapshot.paramMap.get('id');
   /*  console.log(this.id) */
    this.BlogpostService.view_blog(+this.id).subscribe((result)=>{
      /* console.log(result) */
      this.view=result
      this.blogview = this.view.blog_view;
      console.log(this.blogview)


    });

  }

}
