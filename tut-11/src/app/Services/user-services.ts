import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../Model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
   private API = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

    // 🔹 initial + filtered dono ke liye same function
  getUsers(searchText: string = '') {

    let params = new HttpParams();

    if (searchText) {
      params = params.set('q', searchText); // 🔥 server-side search
    }

    return this.http.get<user[]>(this.API, { params });
  }
}
