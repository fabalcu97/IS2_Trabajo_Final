import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { ResourcesService } from '../../shared/services/Resources';
import * as dbModels from "../../../../../../../core/db-models/models";

@Component({
    selector: 'report',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class ReportComponent implements OnInit {

    // Attributes
        resources: ResourcesService;
        //orders: dbModels.Order[];
        orders: any;
        destinatary :any[];
        private switchIO: boolean = true;
    // Methods
        constructor (resources : ResourcesService) {
            this.orders = {};
            this.destinatary = [];
            this.resources = resources;
        }

        getOrders2(){
            this.resources.getOrdersByOutput(this.switchIO).subscribe(
            (ordersData) => {
                this.orders = ordersData;
                console.log(this.orders[2].billId);    

                this.orders.forEach( (bill) => {                                        
                if(bill.billId){
                    this.resources.getBill(bill.billId).subscribe(
                        (billsData) => {
                            this.destinatary.push(billsData);
                        },
                        (err) => {
                            console.log(err);
                        }
                    )                    
                }
                else console.log('deletex wi');
            })
            },
            (err) => {
                console.log(err);
            })
        }

        ngOnInit () {
            this.changeSwitch();                               
        }

        changeSwitch(){
            this.switchIO =! this.switchIO;           
            this.getOrders2();
            console.log(this.orders);
        }

}
