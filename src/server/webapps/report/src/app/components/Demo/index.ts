import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";
import * as dbModels from "../../../../../../../core/db-models/models";

@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class DemoComponent implements OnInit {

    // Attributes
       // router: UIRouter;
       resources: ResourcesService;
       orders: dbModels.Order[];
       private switchIE: boolean = true;
       

    // Methods
        /*constructor (router: UIRouter) {
            //this.router = router;
        }*/
        constructor(resources: ResourcesService){
            this.resources = resources;
            this.switchIE = true;
            console.log(this.switchIE);
            
        }

        getOrders(){
            this.resources.getOrders(this.switchIE).subscribe(
                (data) => {
                    this.orders = data;
                },
                (err) => {
                    console.log(err);
                }
            )
        }

        ngOnInit () {
            this.orders = [];
            this.getOrders();
        }

        changeSwitch(){
            this.switchIE =! this.switchIE;
            if (this.switchIE == true){
                console.log('Income');
            }
            else{
                console.log('expense');
            }
            this.getOrders();
        }

}