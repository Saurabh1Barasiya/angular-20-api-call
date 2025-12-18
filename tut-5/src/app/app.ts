import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServices } from './Services/user-services';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-5';

  constructor(private us:UserServices){}

  updatePartialData(){
    let data = {name:"neha maam"}
    let key = 5;
    this.us.partialUpdate(data,key)
    .pipe(
      catchError((err)=>{
        console.log("some thing went wrong");
        // return of(new Error("client error"));  // ye next callback chala dega.

        return throwError(()=>"client side error");  // it throw error. to error callback is going to run.
      })
    )
    .subscribe({
      next:(res)=>{
        console.log("next callback",res);
      },
      error:(err)=>{
        console.log("Error message",err);
      },
    })
  }
}
