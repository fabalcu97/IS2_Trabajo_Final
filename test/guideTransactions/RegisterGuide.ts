import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ( 'Register Guide ' , function () {
    it ( 'Should return 200' , (done)  => {
        request.post('http://localhost:8000/api/add/guide' , {
            form : {
                reason : "order request",
                addressee : " Av. Moon ",
                departureDate : "33",
                arrivalDate : "240717",
                transportCompany : "Angelitos negros  no heaven",
                vehiclePlate : "v8e-086",
                totalWeight : "20000.00"
            }
        },( err ,httpResponse , body ) => {
            assert.equal ( 200 , httpResponse.statusCode );
            done () ;
        });
    });
});