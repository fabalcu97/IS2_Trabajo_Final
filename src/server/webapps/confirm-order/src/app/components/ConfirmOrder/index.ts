import { Component, OnInit } from '@angular/core';
import { Transition } from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
  selector: 'confirm-order',
  template: require('./template.pug')(),
  styles: [require('./style.styl').toString()]
})

export class ConfirmOrderComponent implements OnInit{

  // Attributes
    resources: ResourcesService;
    trans: Transition;
    billId: String;
    currentProduct: any;
    detail: any;
    products: any[];
    alertMessage: boolean;
    availableLocations: any[];
    registerLotButton: boolean;

  // Methods

  constructor(resources: ResourcesService, trans: Transition){

    this.trans = trans;
    this.resources = resources;
    this.billId = this.trans.params().billId;
    this.currentProduct = null;
    this.alertMessage = false;
    this.registerLotButton = true;
    this.detail = {};
    this.products = [];
    this.availableLocations = [];

  }

  ngOnInit () {

    this.resources.getValidDetail (this.billId).subscribe(
      (detailData) => {
        this.detail = detailData;
        this.detail.forEach( (product) => {
          this.resources.getProduct(product.productId).subscribe(
            (productData) => {
              this.products.push(productData);
            },
            (err) => {
              console.log(err);
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    )

  }

  setProduct (product: any, i: number) {
    this.currentProduct = product;
    this.currentProduct.detail = {};
    this.currentProduct.detail = this.detail[i];
    this.alertMessage = false;
    this.registerLotButton = false;
  }

  requestLocation () {
    console.log(this.currentProduct);
    this.resources.getAvailableLocations(this.currentProduct.category).subscribe(
      (data) => {
        if (data.length < this.currentProduct.detail.lotQuantity) {
          this.alertMessage = true;
          return;
        }
        else {
          this.availableLocations = data;
          this.registerLotButton = true;
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

  storeLot () {
    for (let i = 0; i < this.currentProduct.detail.lotQuantity; ++i) {
      this.resources.addLot({
        productId: this.currentProduct.id,
        locationId: this.availableLocations[i].id,
        departureDate: new Date().getMilliseconds(),
        active: false
      }).subscribe(
        (data) => {

        },
        (err) => {
          console.log(err);
        }
      );
      this.resources.updateStorageLocation(this.availableLocations[i].id, false).subscribe(
        (data) => {
        },
        (err) => {
          console.log(err);
        }
      );
    }
    this.resources.updateStoredDetail(this.currentProduct.detail.id, true).subscribe(
      (data) => {
        alert("Se ingresaron los lotes")
      },
      (err) => {
        console.log(err);
      }
    );
    this.detail = [];
    this.products = [];
    this.resources.getValidDetail (this.billId).subscribe(
      (detailData) => {
        this.detail = detailData;
        this.detail.forEach( (product) => {
          this.resources.getProduct(product.productId).subscribe(
            (productData) => {
              this.products.push(productData);
            },
            (err) => {
              console.log(err);
            }
          );
        });
      },
      (err) => {
        console.log(err);
      }
    )

  }

}
