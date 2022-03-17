import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {
  orders$: Observable<any[]>;
  
  constructor(
    private authService: AuthService,
    private orderService: OrderService) { 

    
  }
  ngOnInit() {
    this.orders$ = this.authService.user$.pipe(switchMap(user => this.orderService.getOrdersByUser(user.uid).snapshotChanges()))
  }

}
