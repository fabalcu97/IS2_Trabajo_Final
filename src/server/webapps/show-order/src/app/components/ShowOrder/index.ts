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

    // Methods
        constructor (trans: Transition, resources: ResourcesService) {
            this.trans = trans;
            this.resources = resources;
            this.billId = this.trans.params().billId;
            this.bill = {};
            this.order = {};
            this.remisionGuide = {};
        }

        ngOnInit () {
            this.resources.getBill(this.billId).subscribe(
                (billData) => {
                    console.log(billData);
                    this.bill = billData;
                },
                (err) => {
                    console.log(err);
                }
            )

            this.resources.getOrder(this.billId).subscribe(
                (orderData) => {

                    console.log(orderData);
                    this.order = orderData;

                    /*this.resources.getRemisionGuide(orderData.idGuide).subscribe(
                        (guideData) => {
                            console.log(guideData);
                            this.remisionGuide = guideData;
                        },
                        (err) => {
                            console.log(err);
                        }
                    )*/
                },
                (err) => {
                    console.log(err);
                }
            )
        }

}