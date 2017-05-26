import * as assert from 'assert';
import * as request from "request";
import 'chai';
import 'mocha';

describe('Get Order By Bill Id', function () {

  it('Should return 200', (done) => {
    
    request.post('http://localhost:8000/api/get/order/:billId', {
        form: {
          idBill : "123ab123ca13a",
          idGuide : "123ab123ca13a",
          bulkControl : false,
          arrivalDate : "tomorrow",
          received : false,
          late : false
        }
    }, (err, httpResponse, body) => {
      assert.equal(200, httpResponse.statusCode);
      done();
    
    });

  });

});