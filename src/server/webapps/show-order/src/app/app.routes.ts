import { Routes } from '@angular/router';
import { UIRouterModule, Transition } from 'ui-router-ng2';
import { components } from './components';

export let statesConfig: any = {
  useHash: true,
  otherwise: '/search',
  states: [
    {
      name: 'search',
      url: '/search',
      component: components.SearchOrderComponent
    },
    {
      name: 'show',
      url: '/show/{billId}',
      params: {
        billId: {
          type: 'string'
        }
      },
      component: components.ShowOrderComponent
    }
  ]
}