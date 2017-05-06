import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./shared/services/Dashboard";

@Component({
  selector: 'app',
  template: require('./app.pug')()
})
export class AppComponent implements OnInit{

  dashboard: DashboardService;

  constructor(dashboard: DashboardService){
    this.dashboard = dashboard;
  }

  ngOnInit () {
    this.dashboard.registerModule({
      name: "Test Module1",
      submodules: [
        {
          name: "Test1",
          route: "test1"
        },
        {
          name: "Test2",
          route: "test2"
        },
        {
          name: "Test3",
          route: "test3"
        }
      ]
    });

    this.dashboard.registerModule({
      name: "Test Module2",
      submodules: [
        {
          name: "Test1",
          route: "test1"
        },
        {
          name: "Test2",
          route: "test2"
        },
        {
          name: "Test3",
          route: "test3"
        }
      ]
    });
  }
}
