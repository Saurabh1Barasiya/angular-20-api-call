import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Services/user';
import { userInfo } from './model/user.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  constructor(private service: User) { }

  protected title = 'tut-3';

  userData: userInfo = {
    userId: 100,
    id: 100,
    title: "new user",
    body: "hi its my first post",
  }

  sendData() {
    this.service.sendUser(this.userData).subscribe({
      next: (res) => {
        if(res.status === 201){
          console.log("User sucessfully created...");
          console.log(res.body) // actual data
          console.log(res.headers) // haeders optinals
        }
      },
      error: (err) => {
        console.error('Error:', err);
      }
    })
  }
}
