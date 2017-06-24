import * as  assert  from 'assert' ;
import * as request  from 'request' ;
import 'chai';
import 'mocha';

describe( 'Get Orders late', function (){
    it( 'should return 202' , (done) => {
        request.get('http://localhost:8000/api/get/orders/late/:late', {
            form :{
                idBill : "123ab123ca13a" ,
                idGuide : "123ab123ca13a" ,
                bulkControl : true ,
                arrivalDate : "date" ,
                received : true ,
                late : false 
            }
        },(err , httpResponse ,body )=> {
            assert.equal(200,httpResponse.statusCode);
            done();
        });
    });
} );