import * as assert from 'assert' ;
import * as request from "request" ;
import 'chai' ;
import 'mocha' ;

 describe ( 'Get ProductS' , function () {
     it('Should Return 200', (done) => {
         request.get('http://localhost:8000/api/get/products',{
             form : {
                 idProduct : "product01" ,
                 idType : "Type_productA"
             }
         },( err , httpResponse ,body ) => {
             assert.equal ( 200 , httpResponse.statusCode );
             done();
         });
     });
 }) ;