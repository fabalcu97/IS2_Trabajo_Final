import { NgModule, Component } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { UIRouterModule } from 'ui-router-ng2';
import { sharedServicesList } from "./shared/services/index";
import { sharedComponentList } from './shared/components/index';
import { DateService } from './shared/services/Date';
import { AppComponent } from './app';
import { statesConfig } from './app.routes';


@NgModule({
  declarations: [ AppComponent ].concat(sharedComponentList),
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    UIRouterModule.forRoot(statesConfig)
  ],
  providers: [ ].concat(sharedServicesList),
  bootstrap: [ AppComponent ]
})
export class AppModule {}
