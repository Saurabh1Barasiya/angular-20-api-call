import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { userInfo } from './Model/user.model';
import { UserServices } from './Services/user-services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'tut-7';

  constructor(private us: UserServices) { }

  userData: userInfo[] = [];

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.us.loadAllData().subscribe({
      next: (res) => {
        console.log(res.status);
        console.log(res.body);
        console.log(res.headers);

        this.userData = res.body || [];
      },
      error: (err) => {
        console.log("error message", err);
      }
    })
  }

  deleteUser(id: any) {
    // console.log(id,typeof id);
    this.us.deleteUser(id)
      .pipe()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.userData = this.userData.filter(user=>user.id !== id);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }
}
