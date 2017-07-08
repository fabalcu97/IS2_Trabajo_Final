import { Routes } from '@angular/router';
import { UIRouterModule } from 'ui-router-ng2';
import { components } from './components';

export let statesConfig: any = {
  useHash: true,
  otherwise: '/list',
  states: [
    {
      name: 'product',
      url: '/product',
      component: components.RegisterProductComponent
    },
    {
      name: 'list',
      url: '/list',
      component: components.ListsComponent
    },
    {
      name: 'location',
      url: '/location',
      component: components.RegisterLocationComponent
    },
    {
      name: 'code',
      url: '/code',
      component: components.CodeGeneratorComponent
    }
  ]
};
