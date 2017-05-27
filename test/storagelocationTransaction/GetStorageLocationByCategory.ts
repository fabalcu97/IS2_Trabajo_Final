import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ( 'Get Storage Location By Category' , function() {
    it( 'Should Return 200' , (done) => {
        request.get('http://localhost:8000/api/get/storagelocation/:category' , function() {
            form : {
                x: 1 ,
                y: 2 ,
                z: 3 ,
                available : true ,
                category : "categoryA"
            }
        },( err , httpResponse , body) => {
            assert.equal( 200 , httpResponse.StatusCode ) ;
            done();
        });
    });
});