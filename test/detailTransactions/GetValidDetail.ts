import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe('Get Valid Detail by Bill ID ', function () {
    it (' Should return 200' , (done) => {
        request.get('http://localhost:8000/api/getvalidDetail/:billId',{
            form : {
                billId : "234567",
                productId : "0001101",
                quantity : 100,
                totalPrice : 10000.00,
                totalWeight : 20000.00,
                lotQuantity : 100 
            }
        },( err , httpResponse , body ) => {
            assert.equal ( 200 , httpResponse.statusCode ) ;
            done ();
        });
    });
});