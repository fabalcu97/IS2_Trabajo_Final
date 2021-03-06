import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";
import { CookieService } from "angular2-cookie/core";

@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class HomeComponent implements OnInit {

    // Attributes
        cookies: CookieService;
        resources: ResourcesService;
        router: UIRouter;
        pages: any[];
        type: string;
        name: string;

    // Methods
        constructor (resources: ResourcesService, router: UIRouter, cookies: CookieService) {
            this.cookies = cookies;
            this.resources = resources;
            this.router = router;
            this.pages = [
                {
                    name: 'Confirm Order',
                    page: 'confirm-order',
                    type: 'admin'
                },
                {
                    name: 'Movement Report',
                    page: 'movement-report',
                    type: 'admin'
                },
                {
                    name: 'Register Order',
                    page: 'register-order',
                    type: 'admin'
                },
                {
                    name: 'Register Output Order',
                    page: 'register-output-order',
                    type: 'admin'
                },
                {
                    name: 'Show Order',
                    page: 'show-order',
                    type: '*'
                },
                {
                    name: 'Warehouse',
                    page: 'Warehouse',
                    type: 'admin'
                }
            ];
            this.type = this.cookies.get('type');
            this.name = this.cookies.get('name');
        }

        ngOnInit () {
        }

        logout() {
            this.resources.logout().subscribe(
                (resp) => {
                    window.location.reload();
                },
                (err) => {
                    console.error(err);
                }
            )
        }

}