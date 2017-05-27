import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class DemoComponent implements OnInit {

    // Attributes
       // router: UIRouter;
       private switchIE: boolean = true;
       

    // Methods
        /*constructor (router: UIRouter) {
            //this.router = router;
        }*/
        constructor(){
            this.switchIE = true;
            console.log(this.switchIE);
            
        }

        ngOnInit () {}

        changeSwitch(){
            this.switchIE =! this.switchIE;
            if (this.switchIE == true){
                console.log('Income');
            }
            else{
                console.log('expense');
            }
        }

}