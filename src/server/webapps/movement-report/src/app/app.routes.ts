import { Routes } from '@angular/router';
import { UIRouterModule } from 'ui-router-ng2';
import { components } from './components';

export let statesConfig: any = {
  useHash: true,
  otherwise: '/report',
  states: [
    {
      name: 'report',
      url: '/report',
      component: components.ReportComponent
    }
  ]
};
