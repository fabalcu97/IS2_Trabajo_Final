import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe(' Get Product ', function () {
    it('Should Return 200', (done) => {
        request.get('http://localhost:8000/api/get/product',{
            form : {
                name : "product01",
                category : "list01",
                unitPrice : 10.00,
                unitWeight : 5.00,
                quantityPerLot : 100 
            }
        },( err , httpResponse , body ) => {
            assert.equal( 200 , httpResponse.statusCode );
            done();
                });
    });
});