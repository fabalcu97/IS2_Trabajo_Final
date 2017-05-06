import { Routes } from '@angular/router';
import { UIRouterModule } from 'ui-router-ng2';
import { DashboardComponent } from './shared/components/Dashboard';

export let statesConfig: any = {
  useHash: true,
  otherwise: '/main',
  states: [
    {
      name: 'main',
      url: '/main',
      component: DashboardComponent
    }
  ]
};
