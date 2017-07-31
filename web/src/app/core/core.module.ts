import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CoreRoutingModule } from './core-routing.module';

import { LoginComponent } from './login/login.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    CoreRoutingModule
  ],
  declarations: [
    LoginComponent,
    NavigationBarComponent,
    PageNotFoundComponent
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class CoreModule { }
