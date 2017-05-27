import * as assert from 'assert';
import * as request from "request";
import 'chai';
import 'mocha';

describe('Register Bill', function () {
  it('Should return 202', (done) => {
    request.post('http://localhost:8000/api/add/bill', {
        form: {
          date :"actualdate",
          subtotal :"0.00000",
          iva :"0.18",
          total :"0.00000"
        }
    }, (err, httpResponse, body) => {
      assert.equal(  202  , httpResponse.statusCode);
      done();
    });
  });
});