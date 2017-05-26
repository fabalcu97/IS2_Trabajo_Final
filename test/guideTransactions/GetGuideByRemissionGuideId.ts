import * as assert from 'asser' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ('Get Guide By Remission Guide' , function ( ) {
    it (' Should return 200' , (done) => {
        request.get('http://localhost:8000/api/get/guide/:remissionGuideId',{
            form : {
                reason : "order request" ,
                addressee : "Av. Sun " ,
                departureDate : 09 ,
                arrivalDate : 240617 ,
                transportCompany : "Angelitos negros no heaven" ,
                vehiclePlate : "v8e-086" ,
                totalWeight : 20000.00
            }
        },( err , httpResponse , body ) => {
            assert.equal ( 200 , httpResponse.statusCode );
            done  () ;
        });
    });
});

   