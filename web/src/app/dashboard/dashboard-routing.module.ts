import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { OverviewComponent } from './overview/overview.component';
import { ManageComponent } from './manage/manage.component';
import { ExportComponent } from './export/export.component';
import { ConsoleComponent } from './console/console.component';
import { LogsComponent } from './logs/logs.component';

const routes: Routes = [
  { path: 'dashboard',   component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: OverviewComponent },
      { path: 'manage', component: ManageComponent },
      { path: 'export', component: ExportComponent },
      { path: 'console', component: ConsoleComponent },
      { path: 'logs', component: LogsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
