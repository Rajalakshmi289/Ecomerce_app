import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';




import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { UserService } from './user.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './shopping-cart.service';
import { ProductQuantityComponent } from './product-quantity/product-quantity.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { OrderService } from './order.service';
import { ShoppingCartSummaryComponent } from './shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';




@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    LoginComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent,
 
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    
  
   
   
    
    RouterModule.forRoot([
      //anonymous user
      {path:'',component: ProductsComponent},
      {path:'products',component: ProductsComponent},
      {path:'shopping-cart',component: ShoppingCartComponent},
      {path:'login',component: LoginComponent},
      
      //normal user
      {path:'check-out',component: CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'order-success/:id',component: OrderSuccessComponent,canActivate:[AuthGuardService]},
      {path:'my-orders',component: MyOrdersComponent,canActivate:[AuthGuardService]},
     
      //admin only
      {path:'admin/products',component: AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/new',component: ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/products/:id',component: ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
      {path:'admin/orders',component: AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]}
    ]),
    NgbModule

  ],
  providers: [ 
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
