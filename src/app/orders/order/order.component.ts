import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from './../../shared/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {

  
  constructor(public service: OrderService) { }

  ngOnInit() {
    this.resetForm();
  }
  
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      ID: 0,
      Name: '',
      Quantity: 0,
      ReceivedDate: ''
    }
  }
  onSubmit(form: NgForm) {  
    if (this.service.formData.ID == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }
  updateRecord(form: NgForm) {
    this.service.putOrder().subscribe(
      res => {
        this.resetForm(form);  
        this.service.getList();
      },
      err => {
        console.log(err);
      }
    )
  }


  insertRecord(form: NgForm) {
    this.service.postOrder().subscribe(
      res => { 
        console.log(res);
        this.resetForm(form);
        this.service.getList();
       },
      err => { console.log(err); }
    )
  }

}
