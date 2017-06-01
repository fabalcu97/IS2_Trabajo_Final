import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { DashboardComponent } from './shared/components/Dashboard';
import { DashboardService } from './shared/services/Dashboard';
import { ResourcesService } from './shared/services/Resources';
import { AppComponent } from './app';
import { statesConfig } from './app.routes';


@NgModule({
  declarations: [ AppComponent, DashboardComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UIRouterModule.forRoot(statesConfig)
  ],
  providers: [ DashboardService, ResourcesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
