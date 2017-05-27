import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

describe ( 'Register Storage Location' , function() {
    it( 'Should Return 200' , (done) => {
        request.post('http://localhost:8000/api/add/storagelocation' , {
            form : {
                x: 1,
                y: 2,
                z: 3,
                available : true,
                category : "categoryA"
            }
        },( err , httpResponse , body) => {
            assert.equal( 200 , httpResponse.statusCode ) ;
            done();
        });
    });
});