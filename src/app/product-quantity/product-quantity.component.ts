import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent  {
  @Input('product') product : Product; 
  @Input ('shopping-cart') shoppingCart:any;
   
 
  constructor(private shoppingcartservice:ShoppingCartService) { } 
 
   addToCart(){ 
    //let cart=this.shoppingcartservice.getOrCreateCart() 
 
    this.shoppingcartservice.addToCart(this.product) 
     
  } 

  removeFromCart(){
    this.shoppingcartservice.removeFromCart(this.product)
  }
  

  

}