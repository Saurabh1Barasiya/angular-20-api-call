import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserInfo } from '../Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Userservice {
  constructor(private http:HttpClient){}

  private baseUrl = "http://localhost:3000/users";
  
  // put request update the data.
  updateData(body:UserInfo,id:number):Observable<any>{
    let apiUrl = `${this.baseUrl}/${id}`;
    console.log(apiUrl)
    return this.http.put(apiUrl,body,{observe: "response"});
  }
}
