
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import * as Interfaces from '../../../../../../../core/db-models/models'

@Injectable()
export class ResourcesService {
  // Attributes
  private $http: Http;

  // Methods
  constructor ($http: Http) {
    this.$http = $http;
  }

  public getBill (billId: string): Observable<Interfaces.Bill> {
    return this.$http.get('http://localhost:8000/api/get/bill?billId=' + billId).map((res: Response) => res.json());
  }

  public getOrder (billId: string): Observable<Interfaces.Order> {
    return this.$http.get('http://localhost:8000/api/get/order?billId=' + billId).map((res: Response) => res.json());
  }

}
