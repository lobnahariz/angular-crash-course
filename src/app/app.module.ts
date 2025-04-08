import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {FormsModule} from "@angular/forms";
import {MessageDetailsComponent} from "./message-details/message-details.component"; // si tu as des routes

@NgModule({
  declarations: [AppComponent, MyFirstCompComponent, MessageDetailsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
