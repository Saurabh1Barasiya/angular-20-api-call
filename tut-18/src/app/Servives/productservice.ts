import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Productservice {

  constructor(private http:HttpClient){}

  apiUrl = "https://dummyjson.com/products";

  getProdusts(){
    return this.http.get(this.apiUrl);
  }
}
