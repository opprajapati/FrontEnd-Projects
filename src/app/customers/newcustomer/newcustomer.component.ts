import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css']
})
export class NewcustomerComponent implements OnInit {

  constructor() { }
  newcustform!: FormGroup;
  ngOnInit(): void {
  }

  newcustForm = new FormGroup({
    customerId: new FormControl(''),
    customerName: new FormControl(),
    customerEmail: new FormControl(),
    customerMobile: new FormControl(),
    customerPin: new FormControl()
  })
  submitNewCustomer() {
    console.log(this.newcustform);
    alert("New customer Creted")
  }

}
