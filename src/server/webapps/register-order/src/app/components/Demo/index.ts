import {Component, OnInit} from '@angular/core';
import { ResourcesService } from "../../shared/services/Resources";
import { DateService } from "../../shared/services/Date";
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
import * as dbModels from "../../../../../../../core/db-models/models";


@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')()
})
export class DemoComponent implements OnInit {

    // Attributes
      resources: ResourcesService;
      date: DateService;
      products: dbModels.Product[];
      detailList: dbModels.Detail[];
      bill: dbModels.Bill;
      order: dbModels.Order;
      guide: dbModels.RemissionGuide;
      temporalDate1: Date;
      temporalDate2: Date;
      temporalDate3: Date;

    // Methods
      constructor (resources: ResourcesService, date: DateService) {
        this.resources = resources;
        this.date = date;
        this.temporalDate1 = null;
        this.temporalDate2 = null;
        this.temporalDate3 = null;
        this.bill = {
          iva: 19,
          subtotal: 0,
          total: 0
        };
        this.order = {
          guideId: '0',
          billId: '0',
          output: false,
          arrivalDate: 0,
          bulkControl: false,
          received: false,
          late: false
        };
        this.guide = {
          addressee: '',
          arrivalDate: 0,
          departureDate: 0,
          reason: '',
          totalWeight: 0,
          transportCompany: '',
          vehiclePlate: ''
        };
        this.detailList = [];
        this.products = [];
      }

      ngOnInit() {
        this.resources.getProducts().subscribe(
          (data) => {
            this.products = data;
          },
          (err) => {
            console.log(err);
          }
        )
      }

      addProductToDetail () {
        this.bill.subtotal = 0;
        this.guide.totalWeight = 0;
        this.detailList.forEach( (detail) => {
          let product = this.products.filter( (products) => {
            return products.id == detail.productId;
          });
          if (product.length == 0) {
            return;
          }

          detail.quantity = product[0].quantityPerLot * detail.lotQuantity;
          this.bill.subtotal += product[0].unitPrice * detail.quantity;
          this.guide.totalWeight += product[0].unitWeight * detail.quantity;

        });
        //probamdo output true, sin esta linea el output sale null
        this.order.output = true;
        this.bill.total = this.bill.subtotal + this.bill.subtotal*(this.bill.iva/100);

      }

      setDate1() {
        this.order.arrivalDate = this.date.convertDate(this.temporalDate1);
      }

      setDate2() {
        this.guide.departureDate = this.date.convertDate(this.temporalDate2);
      }

      setDate3() {
        this.guide.arrivalDate = this.date.convertDate(this.temporalDate3);
      }

      addProduct () {
        this.detailList.push({
          billId: '',
          productId: '',
          quantity: 0,
          totalPrice: 0,
          totalWeight: 0,
          lotQuantity: 0
        })
      }     


      deleteProduct (index: number) {
        this.detailList.splice(index, 1);
      }

      submitForm () {
        this.resources.registerBill(this.bill).subscribe(
          (billData) => {
            this.resources.registerRemisionGuide(this.guide).subscribe(
              (guideData) => {
                this.order.billId = billData.id;
                this.order.guideId = guideData.id;
                this.resources.registerOrder(this.order).subscribe(
                  (orderData) => {
                    this.detailList.forEach( (detail) => {
                      detail.billId = billData.id;
                      this.products.forEach( (product) => {
                        if (detail.productId == product.id) {
                          detail.quantity = product.quantityPerLot * detail.lotQuantity;
                          detail.totalPrice = detail.quantity * product.unitPrice
                          detail.totalWeight = detail.quantity * product.unitWeight;
                          return;
                        }
                      });
                      this.resources.registerDetail(detail).subscribe(
                        (detailData) => {
                        },
                        (err) => {
                         console.log(err);
                        });
                    });
                  },
                  (err) => {
                   console.log(err);
                  });
              },
              (err) => {
                console.log(err);
              }
            );
            alert("PLease store your bill id: " + billData.id);
          },
          (err) => {
            console.log(err);
          }
        )
      }

}
