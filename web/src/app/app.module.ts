import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    DashboardModule,
    AppRoutingModule
  ],
  providers: [
    Title
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
