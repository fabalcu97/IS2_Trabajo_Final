import { Routes } from '@angular/router';
import { UIRouterModule } from 'ui-router-ng2';
import { components } from './components';

export let statesConfig: any = {
  useHash: true,
  otherwise: '/register',
  states: [
    {
      name: 'register',
      url: '/register',
      component: components.RegisterOutputOrderComponent
    }
  ]
};
