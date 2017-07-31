import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { OverviewComponent } from './overview/overview.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
  { path: 'dashboard',   component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'manage', component: ManageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
