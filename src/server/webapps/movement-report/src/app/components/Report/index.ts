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
        orders: any[];
        bills :any[];
        private switchIO: boolean = true;
    // Methods
        constructor (resources : ResourcesService) {
            this.orders = [];
            this.bills = [];
            this.resources = resources;
        }

        getOrders2(){
            this.orders = [];
            this.bills = [];
            console.log("pre aqui");
            console.log(this.switchIO);
            this.resources.getOrdersByOutput(this.switchIO).subscribe(
            (ordersData) => {
                this.orders = ordersData;
                console.log("aqui");
                console.log(this.orders[0].output);    

                this.orders.forEach( (bill) => {                                                        
                    this.resources.getBill(bill.billId).subscribe(
                        (billsData) => {
                            this.bills.push(billsData);
                        },
                        (err) => {
                            console.log(err);
                        }
                    )                                   
            })
            },
            (err) => {
                console.log(err);
            })
        }

        ngOnInit () {
            this.getOrders2();                              
        }

        changeSwitch(){
            this.switchIO =! this.switchIO; 
            console.log(this.switchIO);          
            this.getOrders2();            
        }

}
