/*eslint-disable*/
import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'libs/orders/src/lib/models/cart';
import { CartService } from 'libs/orders/src/lib/services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'products-product-item',
  templateUrl: './product-item.component.html',
  styles: []
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    };
    // console.log(cartItem)
    this.cartService.setCartItem(cartItem);
  }
}
