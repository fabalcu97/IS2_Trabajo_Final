import * as assert from  'assert' ;
import * as request from  "request" ;
import 'chai' ;
import 'mocha' ;

describe ('Register Order Late' , function () {
    it('Should Return 200' , (done) => {
        request.post('http://localhost:8000/api/updateLate/order',{
            form : {
                idBill : "123ab123ca13a" ,
                idGuide : "123ab123ca13a" ,
                bulkControl : false ,
                arrivalDate : "lateDate" ,
                received : true ,
                late : false
            }
        },( err , httpResponse , body) => {
            assert.equal( 200 , httpResponse.StatusCode);
            done();
        });
    });
});