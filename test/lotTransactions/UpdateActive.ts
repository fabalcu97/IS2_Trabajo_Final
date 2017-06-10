import * as assert from 'assert' ;
import * as request from 'request' ;
import 'chai' ;
import 'mocha' ;

describe ( 'Update Active' , function () {
    it ( 'Should return 200' , (done) => {
        request.get('http://localhost:8000/api/updateActive/lot', {
            form : {
                productId : "product01" ,
                locationId : "123" ,
                departureDate : "001" ,
                active : true 
            }
        },(err , httpResponse , body ) => {
            assert.equal (200, httpResponse.statusCode );
            done ();
        });
    });
});