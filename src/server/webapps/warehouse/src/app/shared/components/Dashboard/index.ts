import { Component } from '@angular/core';
import { DashboardService, DashboardModule } from '../../services/Dashboard'

@Component({
  selector: 'dashboard',
  template: require('./template.pug')(),
  styles: [require('./style.styl').toString()]
})

export class DashboardComponent {

  dashboard: DashboardService;
  modules: DashboardModule[];

  constructor(dashboard: DashboardService){
    this.dashboard = dashboard;
    this.modules = [];

    this.dashboard.onModuleRegister( (module: DashboardModule) => {
      this.modules.push(module);
    })
  }

}
