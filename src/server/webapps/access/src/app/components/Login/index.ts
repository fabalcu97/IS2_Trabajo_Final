import { Component, OnInit } from '@angular/core';
import { UIRouter, StateService } from 'ui-router-ng2';
import { ResourcesService } from '../../shared/services/Resources'
import * as dbModels from '../../../../../../../core/db-models/models'

@Component({
    selector: 'login',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class LoginComponent implements OnInit {

    // Attributes
      resources: ResourcesService;
      state: StateService;
      person: any;

    // Methods
        constructor (resources: ResourcesService, state: StateService) {
          this.resources = resources;
          this.state = state;
          this.person = {
            username: "",
            password: ""
          }
        }

        ngOnInit () {

        }

        submit() {
          this.resources.login(this.person).subscribe(
            (resp) => {
              window.location.href = '/app/home'
            },
            (err) => {
              console.error(err);
            }
          )
        }

}
