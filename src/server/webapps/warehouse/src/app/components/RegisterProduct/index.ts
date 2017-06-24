import {Component, OnInit} from '@angular/core';
import {StateService} from 'ui-router-ng2';
import {ResourcesService} from "../../shared/services/Resources";

@Component({
  selector: 'product',
  styles: [require('./styles.styl').toString()],
  template: require('./template.pug')(),
})
export class RegisterProductComponent implements OnInit {

  // Attributes
  product: any;
  resources: ResourcesService;
  state: StateService;

  // Methods
  constructor (resources: ResourcesService, state: StateService) {
    this.resources = resources;
    this.state = state;
    this.product = {
      category: "",
      name: "",
      quantityPerLot: "",
      unitPrice: "",
      unitWeight: "",

    }
  }

  ngOnInit () {

  }

  registerProduct() {
    this.resources.registerProduct(this.product).subscribe(
      (data) => {
        alert("Product registered");
        this.state.go('list');
      },
      (err) => {
        console.log(err);
      }
    )
  }
}