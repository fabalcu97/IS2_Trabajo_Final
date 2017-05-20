
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

  public getDetail (billId: String): Observable<Interfaces.Detail> {
    return this.$http.get('http://localhost:8000/api/get/detail/' + billId).map((res: Response) => res.json());
  }

  public getProduct (productId: String): Observable<Interfaces.Detail> {
    return this.$http.get('http://localhost:8000/api/get/product/' + productId).map((res: Response) => res.json());
  }

  public updateBulkControl (orderId: String, bulkControl: boolean): Observable<Interfaces.Order> {
    return this.$http.post('http://localhost:8000/api/updateBulkControl/order/', {
      orderId: orderId,
      orderBulkControl: bulkControl
    }).map((res: Response) => res.json());
  }

  public updateOrderReceived (orderId: String, received: boolean): Observable<Interfaces.Order> {
    return this.$http.post('http://localhost:8000/api/updateReceived/order/', {
        orderId: orderId,
        orderReceived: received
    }).map((res: Response) => res.json());
  }

  public updateLateOrder (orderId: String, late: boolean): Observable<Interfaces.Order> {
    return this.$http.post('http://localhost:8000/api/updateLate/order/', {
      orderId: orderId,
      orderLate: late
    }).map((res: Response) => res.json());
  }

  public getProducts (): Observable<Interfaces.Product[]> {
    return this.$http.get('http://localhost:8000/api/get/products').map((res: Response) => res.json());
  }
  
}
