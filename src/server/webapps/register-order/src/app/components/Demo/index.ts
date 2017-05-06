import {Component, OnInit} from '@angular/core';
import {UIRouter} from 'ui-router-ng2';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';


@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')()
})
export class DemoComponent implements OnInit {

    // Attributes
        router: UIRouter;
        rowData = [{
            nameProduct: '',
            lots: 'some@one.com',
            unitsPerLot: '15'
        }];

        constructor () {
            console.log('myTable constructed');
        }
  
    addRow() {
        this.rowData.push({
        nameProduct: '',
        lots: 'Anot@th.er',
        unitsPerLot: 'AQUI VA LA COnSULTA A LA BS' 
        })
    }

    deleteRow(){
        this.rowData.pop()
    }
    
    ngOnInit() {        
        
    }    

   
}