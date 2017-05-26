import * as assert from 'assert';
import * as request from "request";
import 'chai';
import 'mocha';

describe ('Register Detail', function () {
    it ('Should return 200' , (done) => {
        request.post('http://localhost:8000/api/add/detail',{
            form : {
                billId : "123445" ,
                productId : "0001111" ,
                quantity : 101 ,
                totalPrice : 10000.00 ,
                totalWeight : 20000.00 ,
                lotQuantity : 110 
            }
        },(err , httpResponse , body) => {
            assert.equal ( 200 , httpResponse.statusCode );
            done () ;
        });
    });
});