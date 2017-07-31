import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CoreRoutingModule } from './core-routing.module';

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
    PageNotFoundComponent
  ],
  exports: [
  ]
})
export class CoreModule { }
