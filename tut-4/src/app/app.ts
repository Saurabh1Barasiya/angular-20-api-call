import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Userservice } from './Services/userservice';
import { UserInfo } from './Model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-4';

  constructor(private userService: Userservice) { }


  data: UserInfo = {
    id: 5,
    age: 20,
    email: "suhani@gmail.com",
    name: "suhani kushwaha",
  }

  updateUserData() {
    let key:number|undefined = this.data.id;
    this.userService.updateData(this.data,key??0)
    .subscribe({
      next:(res)=>{
        console.log(res);
      }
    })
  }
}
