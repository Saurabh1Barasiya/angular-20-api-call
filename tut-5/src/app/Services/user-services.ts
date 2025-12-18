import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http:HttpClient){}

  baseUrl = "http://localhost:3000/users"

  partialUpdate(body:any,id:any):Observable<any>{
    let apiUrl = `${this.baseUrl}/${id}`;
    return this.http.patch(apiUrl,body);
  }
}
