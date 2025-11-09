import { BlogpostService } from './../blogpost.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  catdata:any

  constructor(private BlogpostService:BlogpostService) { }

  ngOnInit(): void {
    this.BlogpostService.cat_data().subscribe((result)=>{
     /*  console.log(result) */
     this.catdata = result.c_data
     console.log(this.catdata)
    })
  }

}
