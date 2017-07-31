import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  parentTitle: string = "dashboard";
  childTitle: string = "overview";

  constructor(router: Router, route: ActivatedRoute) {
    router.events.subscribe((val) => {
      this.childTitle = route.firstChild.routeConfig.path
    });
  }

  ngOnInit() {
  }

}
