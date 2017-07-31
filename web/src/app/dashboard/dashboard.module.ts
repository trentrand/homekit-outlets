import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    DashboardRoutingModule
  ],
  declarations: [
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
