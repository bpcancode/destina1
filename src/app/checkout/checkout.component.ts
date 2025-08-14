import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
quantity: number = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  recommendedProducts = [
    { image: 'assets/images/14011.jpg', name: 'SAPPHIRE COMBO 3', price: 'RM 1762.80', reviews: 380, likes: 90 },
    { image: 'assets/images/13701.jpg', name: 'JADE BIO MATRIX SHIELD', price: 'RM 169.90', reviews: 2052, likes: 118 },
    { image: 'assets/images/14011.jpg', name: 'SAPPHIRE BIO MATRIX', price: 'RM 1693.00', reviews: 3000, likes: 1390 },
    { image: 'assets/images/20941.jpg', name: 'Product 4', price: 'RM 123.45', reviews: 245, likes: 88 }
  ];
}
