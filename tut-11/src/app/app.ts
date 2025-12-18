import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { user } from './Model/user.model';
import { UserServices } from './Services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-11';

  constructor(private userService: UserServices) { }

  users: user[] = [];
  searchText = '';

  ngOnInit() {
    // 🔹 component load hote hi ALL DATA
    this.loadUsers();
  }


  loadUsers() {
    this.userService.getUsers(this.searchText)
      .subscribe(data => {
        this.users = data;
      });
  }

  onSearchChange() {
    // 🔹 jab input me type kare
    this.loadUsers();
  }

}
