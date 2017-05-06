import { Component, OnInit } from '@angular/core';
import { UIRouter, Transition } from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
    selector: 'show-order',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})

export class ShowOrderComponent implements OnInit {

    // Attributes
        billId: String;
        trans: Transition;
        resources: ResourcesService;
        bill: any;
        order: any;
        remisionGuide: any;
        detail: any;
        products: any[];

    // Methods
        constructor (trans: Transition, resources: ResourcesService) {
            this.trans = trans;
            this.resources = resources;
            this.billId = this.trans.params().billId;
            this.bill = {};
            this.order = {};
            this.remisionGuide = {};
            this.detail = {};
            this.products = [];
        }

        ngOnInit () {
            this.resources.getBill(this.billId).subscribe(
                (billData) => {
                    this.bill = billData;
                },
                (err) => {
                    console.log(err);
                }
            )

            this.resources.getOrder(this.billId).subscribe(
                (orderData) => {
                    this.order = orderData;

                    this.resources.getRemisionGuide(orderData.guideId).subscribe(
                        (guideData) => {
                            this.remisionGuide = guideData;
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
                },
                (err) => {
                    console.log(err);
                }
            )

            this.resources.getDetail (this.billId).subscribe(
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
                        )
                    })
                },
                (err) => {
                    console.log(err);
                }
            )
        }

        updateBulk () {
            console.log(this.order);
            this.resources.updateBulkControl(this.order.id, this.order.bulkControl).subscribe(
                (data) => {
                    alert("Actualización exitosa");
                },
                (err) => {
                    console.log(err);
                }
            )
        }

        updateReceived () {
            this.resources.updateOrderReceived(this.order.id, this.order.received).subscribe(
                (data) => {
                    alert("Actualización exitosa");
                },
                (err) => {
                    console.log(err);
                }
            )
        }

        updateLate () {
            this.resources.updateLateOrder(this.order.id, this.order.late).subscribe(
                (data) => {
                    alert("Actualización exitosa");
                },
                (err) => {
                    console.log(err);
                }
            )
        }

}