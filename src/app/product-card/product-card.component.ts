import { Component, Input, OnInit } from '@angular/core'; 
import { Product } from '../models/product'; 
import { ShoppingCart } from '../models/shopping-cart';
import { ShoppingCartService } from '../shopping-cart.service'; 
 
@Component({ 
  selector: 'product-card', 
  templateUrl: './product-card.component.html', 
  styleUrls: ['./product-card.component.css'] 
}) 
export class ProductCardComponent  { 
   @Input('product') product : Product; 
   @Input ('show-actions') showActions=true ;
   @Input ('shopping-cart') shoppingCart:ShoppingCart;
   
 
  constructor(private shoppingcartservice:ShoppingCartService) { } 
 
   addToCart(){ 
     this.shoppingcartservice.addToCart(this.product) 
     
  } 
}