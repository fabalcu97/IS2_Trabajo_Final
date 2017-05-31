import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ( 'Update Stored', function () {
    it ( 'Should return 200' , (done) => {
        request.post('http://localhost:8000/api/updateStored/detail',{
            form : {
                billId : "23467",
                productId : "0001101",
                quantity : "100",
                totalPrice : "10000.00",
                totalWeight : "20000.00",
                lotQuantity : "100"
            }
        },( err ,httpResponse , body ) => {
            assert.equal ( 200 , httpResponse.statusCode );
            done ();
        });
    });
});
