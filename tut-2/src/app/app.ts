import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Service/user';
import { UserInfo1 } from './Model/user.mdel';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-2';

  post: UserInfo1[] = [];

  constructor(private service: User) {

  }

  getPost() {
    this.service.getPost()
      .pipe(
        tap((data) => console.log(data)),
        map(posts =>
          posts.map(p => ({
            id: p.id,
            title: p.title,
            body: p.body
          })))
      )
      .subscribe({
        next: (data: UserInfo1[]) => {
          this.post = data;
        }
      })
  }
}
