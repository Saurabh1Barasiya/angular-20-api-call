import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http:HttpClient){}

  baseUrl = "http://localhost:3000/users";

  deleteData(id:number):Observable<any>{
    let apiUrl = `${this.baseUrl}/${id}`;
    return this.http.delete(apiUrl);
  }
}
