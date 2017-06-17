import {Component, OnInit} from '@angular/core';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
  selector: 'product',
  styles: [require('./styles.styl').toString()],
  template: require('./template.pug')(),
})
export class ListsComponent implements OnInit {

  // Attributes
  products: any[];
  locations: any[];
  resources: ResourcesService;

  // Methods
  constructor (resources: ResourcesService) {
    this.resources = resources;
    this.products = [];
    this.locations = [];
  }

  ngOnInit () {
    this.resources.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log(err);
      }
    );
    this.resources.getAllLocations().subscribe(
      (data) => {
        this.locations = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

}