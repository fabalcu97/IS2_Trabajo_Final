import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
    selector: 'register',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class RegisterComponent implements OnInit {

    // Attributes
        resources: ResourcesService;
        code: string;

    // Methods
        constructor (resources: ResourcesService) {
            this.resources = resources;
            this.code = "";
        }

        ngOnInit () {
            this.code = prompt("Insert the code");
            console.log(this.code);
        }

}
