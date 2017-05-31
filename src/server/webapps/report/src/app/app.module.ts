import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { components, componentsList } from './components';
import { sharedComponent, sharedComponentList } from './shared/components/index';
import { services, servicesList } from './services';
import { sharedServices, sharedServicesList } from './shared/services/index';
import { AppComponent } from './app';
import { statesConfig } from './app.routes';


@NgModule({
  declarations: [ AppComponent ].concat(componentsList, sharedComponentList),
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UIRouterModule.forRoot(statesConfig)
  ],
  providers: [].concat(servicesList, sharedServicesList),
  bootstrap: [ AppComponent ]
})
export class AppModule {}