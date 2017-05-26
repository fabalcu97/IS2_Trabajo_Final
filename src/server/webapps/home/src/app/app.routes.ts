import { Routes } from '@angular/router';
import { UIRouterModule } from 'ui-router-ng2';
import { components } from './components';

export let statesConfig: any = {
  useHash: true,
  otherwise: '/home',
  states: [
    {
      name: 'home',
      url: '/home',
      component: components.HomeComponent
    }
  ]
}