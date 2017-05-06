import {Injectable} from '@angular/core';

export interface DashboardModule {
  name: string;
  submodules?: {
    name: string;
    route: string;
  } []
}

@Injectable()
export class DashboardService {

  // Attributes
  onModuleRegisterCallbacks: Function [];

  // Methods
  constructor () {
    this.onModuleRegisterCallbacks = [];
  }

  onModuleRegister (fun: Function) {
    this.onModuleRegisterCallbacks.push(fun);
  }

  registerModule (module: DashboardModule) {
    this.onModuleRegisterCallbacks.forEach( (fun) => {
      fun(module);
    })
  }
}
