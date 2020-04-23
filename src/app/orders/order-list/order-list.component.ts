import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared/order.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: []
})
export class OrderListComponent implements OnInit {

  constructor(public service:OrderService) { }

  ngOnInit(): void {
    this.service.getList();
  }

  populateForm(item) {
    this.service.formData = Object.assign({}, item);
  }

  onDelete(ID) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deleteOrder(ID)
        .subscribe(res => {
          this.service.getList();
        },
        err => { console.log(err); })
    }
  }

}
