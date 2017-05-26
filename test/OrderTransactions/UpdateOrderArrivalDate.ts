import * as assert from 'assert';
import * as request from 'request';
import 'chai';
import 'mocha';

describe('Register UpDate Arrival Date Order',function (){
    
    it ('Should return 200' , (done) => {
        request.post('http://localhost:8000/api/updateArrivalDate/order',){
            form:{
                idBill : "123ab123ca13a",
                idGuide : "123ab123ca13a",
                bulkControl : false,
                arrivalDate : "date",
                received : false ,
                late : false
            }
        },(err,httpResponse , body) => {
            assert.equal(200,httpResponse.statusCode);
            done();
        });
    });
});