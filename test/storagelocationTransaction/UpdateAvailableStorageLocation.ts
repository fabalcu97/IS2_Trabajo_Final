import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ( ' Update available Storage Location' , function() {
    it( 'Should Return 200' , (done) => {
        request.post('http://localhost:8000/api/udpdateAvailable/storagelocation' , function() {
            form : {
                x: 1 ,
                y: 2 ,
                z: 3 ,
                available : false ,
                category : "categoryA"
            }
        },( err , httpResponse , body) => {
            assert.equal( 200 , httpResponse.StatusCode ) ;
            done();
        });
    });
});