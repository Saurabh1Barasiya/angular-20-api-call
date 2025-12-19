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
export class App implements OnInit{
  
  protected title = 'tut-12';
  isNextDisabled = false;

  constructor(private us:UserServices){}

  ngOnInit(): void {
    this.load();
  }

  userData:user[] = [];


  load(){
    let limit:number = 5;
    this.us.getUsers(this.page,limit).subscribe({
      next:(res)=>{
        if(res.length === 0){
          this.isNextDisabled = true;
          return
        }
        this.userData = res;
        this.isNextDisabled = false;
      },
      error:(err)=>{
        console.log("Error occurs",err);
      }
    })
  }


  page = 1;

  prev() {
    if(this.page > 1){
      this.page--;
      this.load();
    }
  }

  next() {
    if(!this.isNextDisabled){
      this.page++;
      this.load();
    }
  }
}
