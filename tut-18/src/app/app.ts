import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productservice } from './Servives/productservice';
import { ProductData } from './Models/product.interce';
import { map, tap } from 'rxjs';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SlicePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{

  constructor(private ps:Productservice){}

  products !: ProductData[];

  protected title = 'tut-18';

  ngOnInit(): void {
    this.ps.getProdusts().pipe(
      map((ele:any)=>ele.products.map((el:any):ProductData=>{
        return {
          id:el.id,
          category:el.category,
          description:el.description,
          discountPercentage:el.discountPercentage,
          price:el.price,
          rating:el.rating,
          stock:el.stock,
          title:el.title
        }
      })),

      
    )
    .subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.products = res;
      }
    })
  }


}

