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

        getOrders(){
            this.resources.getOrdersByOutput(this.switchIO).subscribe(
            (data) => {
                this.orders = data;
                //console.log(this.orders);     
            },
            (err) => {
                console.log(err);
            }
            )
        }

        ngOnInit () {
        
            this.resources.getOrdersByOutput(this.switchIO).subscribe(
            (data) => {
                this.orders = data;
                console.log(this.orders);    

                this.orders.forEach( (guides) => {                                        
                if(guides.guideId){
                    this.resources.getRemisionGuide(guides.guideId).subscribe(                    
                        (guideData) => {                        
                            this.destinatary.push(guideData);                        
                        },
                        (err) => {
                            console.log(err);
                        }
                    )
                }
                else console.log('wi');
            })
            },
            (err) => {
                console.log(err);
            })
            
                     
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
