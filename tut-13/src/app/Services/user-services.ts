import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http:HttpClient){}

  apiUrl:string = "http://localhost:3000/users";

  getUser():Observable<user[]>{
    return this.http.get<user[]>(this.apiUrl);
  }
}
