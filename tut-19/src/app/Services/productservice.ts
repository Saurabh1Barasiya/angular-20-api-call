import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../Models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  constructor(private http:HttpClient){}

  apiUrl = "https://dummyjson.com/products";

  getProducts():Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.apiUrl);
  }
}
