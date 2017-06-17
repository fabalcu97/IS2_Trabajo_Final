import {Component, OnInit} from '@angular/core';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
  selector: 'product',
  styles: [require('./styles.styl').toString()],
  template: require('./template.pug')(),
})
export class ProductComponent implements OnInit {

  // Attributes
  product: any;
  resources: ResourcesService;

  // Methods
  constructor (resources: ResourcesService) {
    this.resources = resources;
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
        window.location = "http://localhost:8000";
      },
      (err) => {
        console.log(err);
      }
    )
  }
}