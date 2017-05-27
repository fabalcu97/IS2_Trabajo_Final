import * as assert from 'assert';
import * as request from "request";
import 'chai';
import 'mocha';

describe('Register order', function () {

  it('Should return 200', (done) => {
    
    request.post('http://localhost:8000/api/add/order', {
        form: {
          idBill : "123ab123ca13a",
          idGuide : "123ab123ca13a",
          bulkControl : true,
          arrivalDate : "dad",
          received : true,
          late : false
        }
    }, (err, httpResponse, body) => {
      assert.equal(200, httpResponse.statusCode);
      done();
    
    });

  });

});