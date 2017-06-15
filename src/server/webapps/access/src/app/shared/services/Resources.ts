import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
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

  public registerBill (bill: Interfaces.Bill): Observable<Interfaces.Bill> {
    return this.$http.post('http://localhost:8000/api/add/bill/', {
        subtotal: bill.subtotal,
        iva: bill.iva,
        total: bill.total
	  }).map((res: Response) => res.json());
  }

  public getOrder (billId: String): Observable<Interfaces.Order> {
    return this.$http.get('http://localhost:8000/api/get/order/' + billId).map((res: Response) => res.json());
  }

  public registerOrder (order: Interfaces.Order): Observable<Interfaces.Order> {
    return this.$http.post('http://localhost:8000/api/add/order/', {
      billId: order.billId,
      guideId: order.guideId,
      bulkControl: order.bulkControl,
      arrivalDate: order.arrivalDate,
      received: order.received,
      late: order.late,
      output: order.output
    }).map((res: Response) => res.json());
  }

  public getRemisionGuide (remissionGuideId: String): Observable<Interfaces.Order> {
    return this.$http.get('http://localhost:8000/api/get/guide/' + remissionGuideId).map((res: Response) => res.json());
  }

  public registerRemisionGuide (guide: Interfaces.RemissionGuide): Observable<Interfaces.RemissionGuide> {
    return this.$http.post('http://localhost:8000/api/add/guide/', {
      reason: guide.reason,
      addressee: guide.addressee,
      departureDate: guide.departureDate,
      arrivalDate: guide.arrivalDate,
      transportCompany: guide.transportCompany,
      vehiclePlate: guide.vehiclePlate,
      totalWeight: guide.totalWeight
    }).map((res: Response) => res.json());
  }

  public getDetail (billId: String): Observable<Interfaces.Detail> {
    return this.$http.get('http://localhost:8000/api/get/detail/' + billId).map((res: Response) => res.json());
  }

  public getValidDetail (billId: String): Observable<Interfaces.Detail[]> {
    return this.$http.get('http://localhost:8000/api/get/validDetail/' + billId).map((res: Response) => res.json());
  }

  public updateStoredDetail (detailId: string, detailStored: boolean): Observable<Interfaces.Detail> {
    return this.$http.post('http://localhost:8000/api/updateStored/detail', {
      detailId: detailId,
      detailStored: detailStored
    }).map((res: Response) => res.json());
  }

  public registerDetail (detail: Interfaces.Detail): Observable<Interfaces.Detail> {
    return this.$http.post('http://localhost:8000/api/add/detail/', {
      billId: detail.billId,
      productId: detail.productId,
      quantity: detail.quantity,
      totalPrice: detail.totalPrice,
      totalWeight: detail.totalWeight,
      lotQuantity: detail.lotQuantity
    }).map((res: Response) => res.json());
  }

  public getProduct (productId: String): Observable<Interfaces.Product> {
    return this.$http.get('http://localhost:8000/api/get/product/' + productId).map((res: Response) => res.json());
  }

  public getProductByName (productName: String): Observable<Interfaces.Detail> {
    return this.$http.get('http://localhost:8000/api/get/productByName/' + productName).map((res: Response) => res.json());
  }

  public registerProduct (product: Interfaces.Product): Observable<Interfaces.Product> {
    return this.$http.post('http://localhost:8000/api/add/product', {
      category: product.category,
		  name: product.name,
		  unitPrice: product.unitPrice,
		  unitWeight: product.unitWeight,
		  quantityPerLot: product.quantityPerLot
    }).map((res: Response) => res.json());
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

  public getStorageLocation (storageLocationId: String): Observable<Interfaces.StorageLocation> {
    return this.$http.get('http://localhost:8000/api/get/slocation/' + storageLocationId).map((res: Response) => res.json());
  }

  public getAvailableLocations (category: String): Observable<Interfaces.StorageLocation[]> {
    return this.$http.get('http://localhost:8000/api/get/storagelocation/' + category).map((res: Response) => res.json());
  }

  public updateStorageLocation (storageLocationId: string, available: boolean): Observable<any> {
    return this.$http.post('http://localhost:8000/api/updateAvailable/storagelocation', {
      storageLocationId: storageLocationId,
      available: available
    }).map((res: Response) => res.json());
  }

  public addLot (lot: Interfaces.Lot): Observable<Interfaces.Lot> {
    return this.$http.post('http://localhost:8000/api/add/lot', {
      Lot: lot
    }).map((res: Response) => res.json());
  }

  public updateDepartureDateLot (lotId: string , lotDeparturelDate: number): Observable<any> {
    return this.$http.post('http://localhost:8000/api/updateDepartureDate/lot', {
      lotId: lotId,
      lotDeparturelDate: lotDeparturelDate
    }).map((res: Response) => res.json());
  }

  public updateActiveLot (lotId: string , lotActive: boolean): Observable<Interfaces.Order> {
    return this.$http.post('http://localhost:8000/api/updateActive/lot', {
      lotId: lotId,
      lotActive: lotActive
    }).map((res: Response) => res.json());
  }


  public getAvailableLots (productId: String): Observable<Interfaces.Lot[]> {
    return this.$http.get('http://localhost:8000/api/get/lot/' + productId).map((res: Response) => res.json());
  }

  public updateArrivalDateOrder (orderId: string , OrderArrivalDate: number): Observable<any> {
    return this.$http.post('http://localhost:8000/api/updateArrivalDate/order', {
      orderId: orderId,
      OrderArrivalDate: OrderArrivalDate
    }).map((res: Response) => res.json());
  }

  public registerStorageLocation (storageLocation: Interfaces.StorageLocation): Observable<Interfaces.StorageLocation> {
    return this.$http.post('http://localhost:8000/api/add/storagelocation', {
      x: storageLocation.x,
      y: storageLocation.y,
      z: storageLocation.z,
      category: storageLocation.category
    }).map((res: Response) => res.json());
  }

  public getOrdersByOutput (output: boolean): Observable<Interfaces.Order[]> {
    return this.$http.get('http://localhost:8000/api/get/orders/output/' + output).map((res: Response) => res.json());
  }

  public registerType (type: Interfaces.Type): Observable<Interfaces.Type> {
    return this.$http.post('http://localhost:8000/api/add/type', {
        name : type.name
	  }).map((res: Response) => res.json());
  }

  public getOrdersByLate (late: boolean): Observable<Interfaces.Order[]> {
    return this.$http.get('http://localhost:8000/api/get/orders/late/' + late).map((res: Response) => res.json());
  }

}
