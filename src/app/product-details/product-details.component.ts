import { Component, OnInit } from '@angular/core';

// use product data from an external file
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  // Inject activated route which contains information about the route, its parameters, and additional data associated with the route
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // subscribe to route parameters and fetch the product based on the productId.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}