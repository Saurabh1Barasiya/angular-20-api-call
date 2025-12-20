import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tut-14';
  parentName:string = "saurabh";
  parentAge:number = 28;
  parentAddress:string = "ward no 8 harrai chhindwara";
  data!:string;

  reciveData(childData:string){
    this.data = childData;
  }
  
}
