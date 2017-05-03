import { Component, OnInit } from '@angular/core';
import { UIRouter, StateParams } from 'ui-router-ng2';

@Component({
    selector: 'show-order',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class ShowOrderComponent implements OnInit {

    // Attributes
        billId: String;
        params: StateParams;

    // Methods
        constructor (params: StateParams) {
            this.params = params;
        }

        ngOnInit () {
            console.log(this.params);
        }

}