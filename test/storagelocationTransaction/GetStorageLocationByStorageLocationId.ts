import * as assert from 'assert' ;
import * as request from 'request' ;
import 'chai';
import 'mocha';

describe ( 'Get Storage Location By Storage Location by Id ', function() {
    it ('Should Return 200' , (done) => {
        request.get('http://localhost:8000/api/get/slocation/:storageLocationId' , {
            form : {
                x : "1" ,
                y : "2" ,
                z : "3" ,
                available : true ,
                category : "CategoryA"
            }
        },(err , httpResponse , body ) => {
            assert.equal(200 ,httpResponse.statusCode );
            done ();
        });
    });
});