import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInfo } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) { }

  private apiUrl = "https://jsonplaceholder.typicode.com/posts";

  sendUser(data: userInfo): Observable<any> {

    // By default Angular sirf response body deta hai.
    // Agar aapko status code + headers + body chahiye, to aapko full HTTP response observe karna padega.
    return this.http.post(this.apiUrl, data, { observe: 'response' });  
  }
}
