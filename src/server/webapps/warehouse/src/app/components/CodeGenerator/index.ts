import {Component, OnInit} from '@angular/core';
import {StateService} from 'ui-router-ng2';
import {ResourcesService} from "../../shared/services/Resources";

@Component({
  selector: 'codes',
  styles: [require('./styles.styl').toString()],
  template: require('./template.pug')(),
})
export class CodeGeneratorComponent implements OnInit {

  // Attributes
  resources: ResourcesService;
  state: StateService;
  typeAccount: string;

  // Methods
  constructor (resources: ResourcesService, state: StateService) {
    this.resources = resources;
    this.state = state;
    this.typeAccount = "";
  }

  ngOnInit () {

  }

  generate() {
    this.resources.getCode(this.typeAccount).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.error(err);
      }
    )
  }

}