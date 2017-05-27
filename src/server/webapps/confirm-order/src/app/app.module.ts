import { NgModule, Component } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from 'ui-router-ng2';
import { componentsList } from './components';
import { sharedComponentList } from './shared/components';
import { sharedServicesList } from './shared/services';
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
  providers: [].concat(sharedServicesList),
  bootstrap: [ AppComponent ]
})
export class AppModule {}
