import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserServices } from './Services/user-services';
import { user } from './Model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {


  protected title = 'tut-13';

  constructor(private us: UserServices) { }

  // i want to display 10 users on per page.

  page: number = 1;
  limit: number = 10;

  userData: user[] = [];
  paginationData: user[] = [];
  totelPages!: number;


  ngOnInit(): void {
    this.load();
  }

  load() {
    this.us.getUser().subscribe({
      next: (res) => {
        this.userData = res;
        console.log(this.userData);
        this.totelPages = Math.ceil(res.length / this.limit);

        this.updateData();
      },
      error: (err) => {
        console.log("error comes", err);
      }
    })
  }

  updateData() {
    let startIndex = (this.page - 1) * this.limit;
    let endIndex = startIndex + this.limit;
    this.paginationData = this.userData.slice(startIndex, endIndex);
    console.log(this.paginationData);
  }

  previous() {
    if (this.page > 1) {
      this.page--;
      this.updateData();
    }
  }

  nextData() {
    if (this.page < this.totelPages) {
      this.page++;
      this.updateData();
    }
  }

}
