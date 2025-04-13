import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];
  constructor() {
    this.init();
  }

  init(){
    this.insert({
      name: 'Alibou',
      email:'alibou]mail',
      message: "Hello Alibou"
    });
    this.insert({
      name: 'XXX',
      email:'XXXX]mail',
      message: "Hello XX"
    });
    this.insert({
      name: 'YYYY',
      email:'YYYY]mail',
      message: "Hello XX"
    })
  }
  insert(message:{name: string, email: string, message: string}):void{
     this.messages.push(message);
  }

  getAllMessages(){
    return this.messages;
  }

  deleteMessage(index: number){
    return this.messages.splice(index, 1);
  }
}
