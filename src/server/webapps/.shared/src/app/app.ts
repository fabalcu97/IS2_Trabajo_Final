import {Component, OnInit} from '@angular/core';
import {DashboardService} from "./shared/services/Dashboard";
import {ResourcesService} from "./shared/services/Resources";
import {DateService} from "./shared/services/Date"; 

@Component({
  selector: 'app',
  template: require('./app.pug')()
})
export class AppComponent implements OnInit{

  dashboard: DashboardService;
  resources: ResourcesService;
  date: DateService;
  dateToConvert: Date;
  convertedDate: number;
  convertedDate1: string;

  constructor(dashboard: DashboardService, resources: ResourcesService, date: DateService){
    this.dashboard = dashboard;
    this.resources = resources;
    this.date = date;
    this.dateToConvert = null;
    this.convertedDate = null;
    this.convertedDate1 = "";
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

  convert() {
    this.convertedDate = this.date.convertDate(this.dateToConvert);
    this.convertedDate1 = this.date.convertDate(this.convertedDate);
  }
}
