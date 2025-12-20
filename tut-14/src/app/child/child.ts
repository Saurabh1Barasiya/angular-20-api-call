import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @Input() name!:string;
  @Input() age!:number;
  @Input() address!:string;

  childData:string='';
  @Output() message = new EventEmitter<string>();

  sendData(){
    this.message.emit(this.childData);
  }

}
