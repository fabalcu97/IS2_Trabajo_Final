import {Component, OnInit} from '@angular/core';
import { FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';


@Component({
    styles: [require('./styles.styl').toString()],
    template: require('./template.pug')()
})
export class DemoComponent implements OnInit {

    // Attributes
      rowData: any[];

    // Methods
      constructor () {
         console.log('myTable constructed');
         this.rowData = [];
      }
   
      addRow() {
         this.rowData.push({
               nameProduct: '',
               lots: 'Anot@th.er',
               unitsPerLot: 'AQUI VA LA COnSULTA A LA BS'
         });
      }

      deleteRow(){
         this.rowData.pop()
      }
      
      ngOnInit() {

      }

}