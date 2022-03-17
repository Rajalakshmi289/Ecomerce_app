import { ShoppingCart } from './models/shopping-cart';
import { Injectable } from '@angular/core';  
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';  
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { take } from 'rxjs/operators';
import { Product } from './models/product';
import { Observable } from 'rxjs-compat';


  
  
@Injectable()  
export class ShoppingCartService {  
  
  constructor(private db:AngularFireDatabase){}


  async getCart(): Promise<Observable<ShoppingCart>>{
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' +cartId)
       .valueChanges().map((x: any)=> new ShoppingCart(x.items));
  }

  async addToCart(product:Product){
    this.updateItemQuantity(product, 1);

  }

  async removeFromCart(product: Product) {
    this.updateItemQuantity(product, -1);
  }


  async clearCart(){
    let cartId=await this.getOrCreateCartId();
    this.db.object('/shopping-carts/'+cartId+'/items').remove();
  }


    private create(){
      return this.db.list('/shopping-carts').push({
          dateCreated:new Date().getTime()
      })
}

    private getItem(cartId:any, productId: string) {
  return this.db.object('/shopping-carts/' +cartId +'/items/'+productId);

}

  private async getOrCreateCartId(): Promise<string>{
    let cartId=localStorage.getItem('cartId')
     if (cartId) return cartId
       
     let result= await this.create();
     localStorage.setItem('cartId',result.key!)
     return result.key!
    
     
  }
  
  private async updateItemQuantity(product: Product, change: number) {
    let cartId=await this.getOrCreateCartId();
    let item$= this.getItem(cartId, product.key);
    item$.snapshotChanges().pipe(take(1)).subscribe(item =>{
      if (item.payload.exists()) {
        let quantity = item.payload.exportVal().quantity + change;
        if (quantity === 0) item$.remove();
        else
            item$.update({
                title: product.title,
                imageUrl: product.imageUrl,
                price: product.price,
                quantity: quantity
            });
    } else {
        item$.set({ product: product, quantity: 1 });
    }
     
    });

  }
}