import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UserServices } from './Services/user-services';
import { user } from './model/user.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-10';

  constructor(private us:UserServices){}
  
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

    if(!text){
      this.userFilteredData = [...this.userData];
      return;
    }

    this.userFilteredData = this.userData.filter(
      (user)=> user.name.toLowerCase().includes(text) || user.email.toLowerCase().includes(text)
    )
    console.log("filter data",this.userFilteredData);
  }
}
