import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInfo } from '../Model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  constructor(private http:HttpClient){}

  baseUrl = "http://localhost:3000/users"

  loadAllData():Observable<HttpResponse<userInfo[]>>{
    return this.http.get<userInfo[]>(this.baseUrl,{ observe: "response"});
  }


  deleteUser(id:string):Observable<userInfo>{
    let apiUrl = `${this.baseUrl}/${id}`
    return this.http.delete<userInfo>(apiUrl);
  }
}
