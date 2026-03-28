import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductData } from './Models/product.interface';
import { Productservice } from './Services/productservice';
import { filter, map, tap } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected title = 'tut-19';

  constructor(private ps:Productservice){}
  

  products!:ProductData[];

  ngOnInit(): void {
    this.ps.getProducts().pipe(
      map(res=>
        res.products
        .filter((ele)=>ele.category === "beauty")
        .map((ele):ProductData=>{
          return {
            id:ele.id,
            category:ele.category,
            description:ele.description,
            price:ele.price,
            title:ele.title
          }
        })
      )
    )
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.products = res;
      }
    })
  }
}
