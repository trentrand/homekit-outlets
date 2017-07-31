import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from "./dashboard.component";
import { SidebarComponent } from './sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { ManageComponent } from './manage/manage.component';
import { ExportComponent } from './export/export.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    SidebarComponent,
    OverviewComponent,
    ManageComponent,
    ExportComponent,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
