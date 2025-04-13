import { Component } from '@angular/core';
import {MyFirstService} from "../services/my-first.service";

@Component({
  selector: 'app-my-first-comp',
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.scss'
})
export class MyFirstCompComponent {

  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  constructor(
      private service: MyFirstService
  ) {
      this.messages = this.service.getAllMessages();
      this.isSubmitted = this.messages.length > 0;
  }

  onSubmit() {
    this.service.insert({
    'name': this.name,
     'email': this.email,
      'message': this.message
    })
   console.log(this.messages);
    this.isSubmitted = true;
  }

  deleteMessage(index: number) {
    this.service.deleteMessage(index);
  }
}
