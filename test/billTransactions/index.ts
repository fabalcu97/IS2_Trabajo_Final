import * as assert from 'assert';
import * as request from "request";
import 'chai';
import 'mocha';

describe('Register Bill', function () {

  it('Should return ---', (done) => {
    
    request.post('http://localhost:8000/api/add/bill', {
        form: {
        date :
        subtotal :
        iva :
        total :
        }
    }, (err, httpResponse, body) => {
      assert.equal(  wowwww! =D  , httpResponse.statusCode);
      done();
    
    });

  });

});