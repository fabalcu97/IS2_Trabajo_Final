import {Component, OnInit} from '@angular/core';
import {UIRouter, StateService} from 'ui-router-ng2';
import { ResourcesService } from "../../shared/services/Resources";

@Component({
    selector: 'register',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class RegisterComponent implements OnInit {

    // Attributes
        resources: ResourcesService;
        state: StateService;
        code: string;
        confPass: string;
        person: any;

    // Methods
        constructor (resources: ResourcesService, state: StateService) {
            this.resources = resources;
            this.state = state;
            this.confPass = "";
            this.code = "";
            this.person = {
                name: "",
                username: "",
                password: "",
                email: "",
                type: ""
            }
        }

        ngOnInit () {            
            this.codeValidation();
            this.resources.validateCode(this.code).subscribe(
                (resp) => {
                    this.person.type = resp.type;
                    setTimeout( () => {}, 500);
                },
                (err) => {
                    window.location.reload();
                }
            )
        }

        codeValidation() {
            while(this.code === ""){
                alert("Code required");
                this.code = prompt("Insert the code");
            }
        }

        submit() {
            if(this.person.password !== this.confPass) {
                return;
            }
            this.resources.registerPerson(this.person).subscribe(
                (resp) => {
                    this.state.go('login');
                },
                (err) => {
                    console.error(err);
                }
            )
        }

}
