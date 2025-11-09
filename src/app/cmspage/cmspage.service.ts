import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CmspageService {
  url='http://127.0.0.1:8000/api/' /*  API */

  constructor(private http:HttpClient) { }

  about_data():Observable<any>{
    return this.http.get(this.url+'display_about')
  }
  create_contact(c:any){
    return this.http.post(this.url+'contact_store',c)
  }
}
