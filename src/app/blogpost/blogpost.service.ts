import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  url='http://127.0.0.1:8000/api/' /*  API */

  constructor(private http:HttpClient) { }
  cat_data():Observable<any>{
    return this.http.get(this.url+'display_category')
  }
  blog_feature():Observable<any>{
    return this.http.get(this.url+'display_blog')
  }
  view_blog(id:any):Observable<any>{
    return this.http.get(this.url+'view_blog/'+id)
  }

}
