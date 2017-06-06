import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./shared/services/Dashboard";
import {ResourcesService} from "./shared/services/Resources";

@Component({
  selector: 'app',
  template: require('./app.pug')()
})
export class AppComponent implements OnInit{

  dashboard: DashboardService;
  resources: ResourcesService;

  constructor(dashboard: DashboardService, resources: ResourcesService){
    this.dashboard = dashboard;
    this.resources = resources;
  }

  ngOnInit () {
    this.resources.getOrdersByOutput(false).subscribe(
      (data) => {
        console.log("Get orders by output");
        console.log(data);
      },
      (err) => {
        console.log("Get orders by output");
        console.log(err);
      }

    );
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
