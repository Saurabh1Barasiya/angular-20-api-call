import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersData } from './models/users.model';
import { UserServices } from './Services/user-services';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'tut-4';

  constructor(private us: UserServices) { }

  originalUserData: UsersData[] = [];
  paginatedData: UsersData[] = [];
  page: number = 1;
  totelPages!: number;
  // limit: number = 10;
  limit: number = 6;
  paginationArray:number[] =[];

  ngOnInit(): void {
    this.us.getAllUsers().subscribe({
      next: (data: UsersData[]) => {
        console.log(data)
        this.originalUserData = [...data];
        this.totelPages = Math.ceil(this.originalUserData.length / this.limit);  // to get totel pages
        this.paginationArray = Array.from({length:this.totelPages},(_,i)=>i+1);
        this.updatePagination();
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log("Observable is complete ...");
      }
    })
  }


  updatePagination() {
    let startIndex = (this.page - 1) * this.limit;  // get the start index
    let endIndex = startIndex + this.limit;
    this.paginatedData = this.originalUserData.slice(startIndex,endIndex);   // get specific data
  }

  nextPage(){
    if(this.page < this.totelPages){
      this.page+=1;
      this.updatePagination();
    }
  }

  previousPage(){
    if(this.page > 1){
      this.page -= 1;
      this.updatePagination();
    }
  }

  goToPage(pageNumber:number){
    this.page = pageNumber;
    this.updatePagination();
  }

}
