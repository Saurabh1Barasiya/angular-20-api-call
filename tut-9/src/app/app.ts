import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserServices } from './Services/user-services';
import { user } from './Model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  constructor(private us:UserServices){}

  protected title = 'tut-9';
  serchText: string = '';

  userData:user[] = [];
  userFilteredData:user[] = [];

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.us.getUser()
    .pipe()
    .subscribe({
      next:(res)=>{
        console.log(res.body);
        this.userData = res.body || [];
        this.userFilteredData = [...this.userData];
      },
      error:(err)=>{
        console.log("Error Message",err);
      }
    })
  }

  getFilterData(){
    console.log(this.serchText.toLowerCase());
    let text = this.serchText.toLowerCase();
    this.userFilteredData = this.userData.filter(
      (user)=> user.name.toLowerCase().includes(text) || user.email.toLowerCase().includes(text)
    )
    console.log("filter data",this.userFilteredData);
  }

  // 'saurabh'.include('') -> true;   
}
