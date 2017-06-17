import {Component, OnInit} from '@angular/core';
import {StateService} from 'ui-router-ng2';
import {ResourcesService} from "../../shared/services/Resources";

@Component({
  selector: 'location',
  styles: [require('./styles.styl').toString()],
  template: require('./template.pug')(),
})
export class RegisterLocationComponent implements OnInit {

  // Attributes
  location: any;
  resources: ResourcesService;
  state: StateService;

  // Methods
  constructor (resources: ResourcesService, state: StateService) {
    this.resources = resources;
    this.state = state;
    this.location = {
      category: "",
      x: "",
      y: "",
      z: ""
    }
  }

  ngOnInit () {

  }

  registerLocation() {
    this.resources.registerStorageLocation(this.location).subscribe(
      (data) => {
        alert("Location registered");
        this.state.go('list');
      },
      (err) => {
        console.log(err);
      }
    )
  }
}