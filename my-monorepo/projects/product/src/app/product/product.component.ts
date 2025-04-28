import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = [
    {
      name: 'Travel Pillow',
      description: 'Comfortable neck pillow for long flights.',
      price: 19.99,
      image: 'assets/images/travel-pillow.png'
    },
    {
      name: 'Portable Charger',
      description: 'Stay charged on the go with this portable power bank.',
      price: 29.99,
      image: 'assets/images/portable-charger.png',
    },
    {
      name: 'Noise Cancelling Headphones',
      description: 'Enjoy quiet flights with noise-canceling headphones.',
      price: 99.99,
      image: 'assets/images/noise-cancellation-headphones.png',
    },
    {
      name: 'Luggage Tags',
      description: 'Personalize your luggage with these stylish tags.',
      price: 7.99,
      image: 'assets/images/luggage-tags.png',
    }
  ];

  cart: any[] = [];

  // Check if product is in cart
  isInCart(product: any): boolean {
    return this.cart.some(item => item.product === product);
  }

  // Toggle product in cart (Add or Remove)
  toggleCart(product: any) {
    const existingItem = this.cart.find(item => item.product === product);

    if (existingItem) {
      // If the item is already in the cart, just increment the quantity
      existingItem.quantity++;
    } else {
      // If the item is not in the cart, add it with quantity 1
      this.cart.push({ product, quantity: 1 });
    }
  }

  // Remove item from cart
  removeFromCart(item: any) {
    this.cart = this.cart.filter(cartItem => cartItem !== item);
  }

  // Increment quantity for an item in the cart
  incrementQuantity(item: any) {
    item.quantity++;
  }

  // Decrement quantity for an item in the cart
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Calculate total price of items in cart
  get totalPrice(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
