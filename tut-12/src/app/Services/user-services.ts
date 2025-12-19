import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http:HttpClient){}

  apiUrl = "http://localhost:3000/users";

  getUsers(page:number,limit:number):Observable<user[]>{
    console.log("hi i am working")
    let newUrl = `http://localhost:3000/users?_page=${page}&_limit=${limit}`;
    console.log(newUrl);
    return this.http.get<user[]>(newUrl);
  }


}
