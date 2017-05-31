import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
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
      products: dbModels.Product[];

    // Methods
        constructor (resources: ResourcesService) {
          this.resources = resources;
          this.products = [];
        }

        ngOnInit () {
          this.resources.getProducts().subscribe(
            (data) => {
              this.products = data;
              console.log(this.products);
            },
            (err) => {
              console.log(err);
            }
          );
          console.log(this.products);
        }

}
