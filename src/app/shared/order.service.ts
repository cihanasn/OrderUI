import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  //readonly rootURL = 'http://localhost:50615/api';
  readonly rootURL = 'http://localhost:5000/api';
  list: Order[];

  constructor(private http: HttpClient) { }

  postOrder()
  {
    return this.http.post(this.rootURL + '/Order', this.formData);
  }

  getList()
  {
    this.http.get(this.rootURL + '/Order')
    .toPromise()
    .then(res => this.list = res as Order[]);
  }
  
  putOrder() {
    return this.http.put(this.rootURL + '/Order/'+ this.formData.ID, this.formData);
  }

  deleteOrder(ID) {
    return this.http.delete(this.rootURL + '/Order/'+ ID);
  }
}
