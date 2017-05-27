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
      name: 'confirm',
      url: '/confirm/{billId}',
      params: {
        billId: {
          type: 'string'
        }
      },
      component: components.ConfirmOrderComponent
    }
  ]
};
