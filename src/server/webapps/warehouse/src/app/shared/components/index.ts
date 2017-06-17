import { DashboardComponent } from './Dashboard/index'

export let sharedComponent = {
  DashboardComponent: DashboardComponent
};

export let sharedComponentList = Object.keys(sharedComponent).map((key) => {
  return sharedComponent[key];
});
