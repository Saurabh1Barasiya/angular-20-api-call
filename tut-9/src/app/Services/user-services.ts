import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http:HttpClient){}

  baseUrl = "http://localhost:3000/users";
  getUser():Observable<HttpResponse<user[]>>{
    return this.http.get<user[]>(this.baseUrl,{observe: "response"});
  }
}
