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
        orders: dbModels.Order[];
        private switchIO: boolean = true;
    // Methods
        constructor (resources : ResourcesService) {
            this.resources = resources;
        }

            getOrders(){
                this.resources.getOrdersByOutput(this.switchIO).subscribe(
                (data) => {
                    this.orders = data;
                    console.log(this.orders);                    
                },
                (err) => {
                    alert("pr ho");
                    console.log(err);
                }
            )
        }


        ngOnInit () {
            this.orders = [];
            this.getOrders();            
        }

        changeSwitch(){
            this.switchIO =! this.switchIO;
            if (this.switchIO == true){
                console.log('Input');
            }
            else{
                console.log('Output');
            }
            this.getOrders();
        }

}