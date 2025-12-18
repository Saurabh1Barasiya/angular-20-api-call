import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '../Services/user-service';
import { catchError, of, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-6';

  constructor(private http:UserService){}

  delete(){
    let id = 1;
    this.http.deleteData(id)
    .pipe(
      catchError((err)=>{
        return throwError(()=>"user not found");
      })
    ).
    subscribe({
      next:(res)=>{
        console.log("current data",res);
      },
      error:(err)=>{
        console.log("Error message",err);
      }
    })
  }
}
