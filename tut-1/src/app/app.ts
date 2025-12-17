import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Services/user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-1';

  userdata:any[]=[];

  constructor(private service:User){

  }

  getData(){
    this.service.getUsers().subscribe({
      next:(data)=>{
        this.userdata = data;
      }
    })
  }
}
