
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

  public getBill (billId: String): Observable<Interfaces.Bill> {
    return this.$http.get('http://localhost:8000/api/get/bill/' + billId).map((res: Response) => res.json());
  }

  public getOrder (billId: String): Observable<Interfaces.Order> {
    return this.$http.get('http://localhost:8000/api/get/order/' + billId).map((res: Response) => res.json());
  }

  public getRemisionGuide (remissionGuideId: String): Observable<Interfaces.Order> {
    return this.$http.get('http://localhost:8000/api/get/guide/' + remissionGuideId).map((res: Response) => res.json());
  }

}
