import { CmspageService } from './../cmspage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact:any

  constructor(private CmspageService:CmspageService) { }

  ngOnInit(): void {
    this.contact = new FormGroup({
      name:new FormControl(''),
      email:new FormControl(''),
      number:new FormControl(''),
      description:new FormControl(''),

    })
  }
  onsubmit(){
    /* console.log(this.contact.value)    get data in console on clicking submit value */
    this.CmspageService.create_contact(this.contact.value).subscribe((result)=>{
      console.log(result);
    });
    this.contact.reset({})

  }

}
