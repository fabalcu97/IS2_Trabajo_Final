import * as assert from 'assert';
import * as request from "request";
import 'chai';
import 'mocha';

describe ('Get Bill by BillID' , function (){
    it('Should return 202' , (done) => {
        request.get('http://localhost:8000/api/get/bill:BillId',{
            form : {
                date :"yesterday",
                subtotal : 0.0000,
                iva : 0.18,
                total :0.00000
            }
        },(err, httpResponse ,body ) => {
            assert.equal( 202 , httpResponse.statusCode);
            done();
        });
    });
});