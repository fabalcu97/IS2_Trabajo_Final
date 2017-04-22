import {Component, OnInit} from '@angular/core';
import {  } from "../../sha";
import {UIRouter} from 'ui-router-ng2';

@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class DemoComponent implements OnInit {

    // Attributes
        http: Http;
        router: UIRouter;
        billId: string;

    // Methods
        constructor (router: UIRouter, http: Http) {
            this.http = http;
            this.router = router;
            this.billId = "";
        }

        ngOnInit () {

        }

        searchBill(){
            this.resources.
        }

}