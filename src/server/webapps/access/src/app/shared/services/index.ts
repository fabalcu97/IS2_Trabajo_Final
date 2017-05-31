import { DashboardService } from './Dashboard';
import { ResourcesService } from './Resources'

export let sharedServices = {
  ResourcesService: ResourcesService,
  DashboardService: DashboardService
};

export let sharedServicesList = Object.keys(sharedServices).map((key) => {
  return sharedServices[key];
});
