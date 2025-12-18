import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../Model/user.mdel';

@Injectable({
  providedIn: 'root',
})
export class User {
  private apiKey = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient){}

  getPost():Observable<UserInfo[]>{
    return this.http.get<UserInfo[]>(this.apiKey);
  }
}
