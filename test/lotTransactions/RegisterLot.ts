import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ( ' Register Lot' , function () {
    it ( 'Should return 200' , (done) => {
        request.post('http://localhost:8000/api/add/lot', {
            form : {
                productId : "product01" ,
                locationId : "123"
            }
        },( err , httpResponse , body ) => {
            assert.equal (200 ,httpResponse.statusCode ) ;
            done () ;
        });
    });
} ) ;