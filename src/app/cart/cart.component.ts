import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // store the products in the cart.
  items;

  // store the form model
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService
  ) {
    // gather the user's name and address, set the checkoutForm property with a form model containing name and address fields
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
    }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  // When users submit their order, the form should reset and the cart should clear.
  onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }


}