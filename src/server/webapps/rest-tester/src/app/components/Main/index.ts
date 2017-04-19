import {Component, OnInit} from '@angular/core';
import {Resources} from '../../services/Resources';
import {UIRouter} from 'ui-router-ng2';

@Component({
    selector: 'main',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class MainComponent implements OnInit {
  // Attributes
    resources: Resources;
    routes: any;
    addperson: string;
    addPersonRes: any;

  // Methods
    constructor (resources: Resources) {
      this.resources = resources;
      this.routes = require('../../routes.json').services;
      this.addperson = '';
      this.addPersonRes = null;
    }

    ngOnInit () {
    }

    addPersonFunction () {
      this.addPersonRes = this.resources.addPerson(JSON.parse(this.addperson));
    }

}
