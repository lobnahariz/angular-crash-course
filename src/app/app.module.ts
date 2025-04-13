import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {MyFirstCompComponent} from "./my-first-comp/my-first-comp.component";
import {FormsModule} from "@angular/forms";
import {MessageDetailsComponent} from "./message-details/message-details.component";
import {MenuComponent} from "./menu/menu.component";
import {AboutComponent} from "./about/about.component";
import {MyFirstService} from "./services/my-first.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [AppComponent, MyFirstCompComponent, MessageDetailsComponent,MenuComponent, AboutComponent, ProductsComponent, ProductDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [MyFirstService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
