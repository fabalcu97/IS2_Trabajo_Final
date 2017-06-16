import { DashboardService } from './Dashboard';
import { ResourcesService } from './Resources';
import { DateService } from "./Date";

export let sharedServices = {
  ResourcesService: ResourcesService,
  DashboardService: DashboardService,
  DateService: DateService
};

export let sharedServicesList = Object.keys(sharedServices).map((key) => {
  return sharedServices[key];
});
