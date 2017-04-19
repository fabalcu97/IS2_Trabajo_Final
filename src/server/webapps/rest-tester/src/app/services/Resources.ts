import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { UIRouter } from 'ui-router-ng2';


@Injectable()
export class Resources {

    // Attributes

    http: Http;
    routes: any;

    // Methods
        constructor (http: Http) {
          this.http = http;
          this.routes = require('../routes.json').services;
        }

        addPerson(person: any){
          let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.post(this.routes.addperson.url, {person: person}, {headers: headers}).subscribe(
            (res) => {
              return res;
            },
            (err) => {
              console.log(err);
            });
        }


}
