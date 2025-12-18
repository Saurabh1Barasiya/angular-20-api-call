import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './Model/user.modal';
import { UserService } from './Services/user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-8';

  users: User[] = [];          // original data
  filteredUsers: User[] = [];  // filtered data
  searchText = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(res => {
      this.users = res.body || [];
      this.filteredUsers = [...this.users];
    });
  }

  filterUsers() {
    const value = this.searchText.toLowerCase();

    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    );
  }
 
}
