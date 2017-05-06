import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';

@Component({
    selector: 'main',
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')(),
})
export class MainComponent implements OnInit {

    // Attributes

    addForm: FormGroup; // form group instance

constructor(private formBuilder: FormBuilder) {}
    ngOnInit() { 
        //    *** this is code for adding invoice details ***
         this.addForm = this.formBuilder.group({
            invoice_no: ['', Validators.required],
            file_no: ['', Validators.required],
            description: ['', Validators.required],
            linktodrive: this.formBuilder.array([
                this.initLink(),
            ])
        });
    }
    initLink() {
        return this.formBuilder.group({
            linkAddress: ['', Validators.required]
        });
    }
    addLink() {
        const control = < FormArray > this.addForm.controls['linktodrive'];
        control.push(this.initLink());
    }
    removeLink(i: number) {
        const control = < FormArray > this.addForm.controls['linktodrive'];
        control.removeAt(i);
    }

}