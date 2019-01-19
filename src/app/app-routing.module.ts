import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DyoItemComponent } from './dyo-item/dyo-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessControlComponent } from './accessControl/accessControl.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { OrdersComponent } from './orders/orders.component';

import { CustomerComponent } from './customer/customer.component';
import { RackComponent } from './rack/rack.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { DyoProductComponent } from './dyo-item/dyo-product/dyo-product.component';
import { DyoFinishComponent } from './dyo-item/dyo-finish/dyo-finish.component';
import { DyoMycartComponent } from './dyo-item/dyo-mycart/dyo-mycart.component';
import { DyoOrderPlacedComponent } from './dyo-item/dyo-order-placed/dyo-order-placed.component';
import { DyoOrderDetailComponent } from './dyo-item/dyo-order-detail/dyo-order-detail.component';
import { DyoCancelOrderComponent } from './dyo-item/dyo-cancel-order/dyo-cancel-order.component';


export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login', component:LoginComponent},
    {path:'customer', component:CustomerComponent},
    {path:'user', component:UserComponent},
    {path:'accessControl', component:AccessControlComponent},
    {path:'product', component:ProductComponent},
    {path:'rack', component:RackComponent },
    {path:'warehouse', component:WarehouseComponent },
    {path:'orders', component:OrdersComponent },
    {path:'dyo', component:DyoItemComponent},
    {path:'dyo-design', component:DyoProductComponent},
    { path:'dyo-finish', component:DyoFinishComponent },
    { path:'dyo-mycart', component:DyoMycartComponent },
    { path:'dyo-orderPlaced', component:DyoOrderPlacedComponent },
    { path:'dyo-orderDetail', component:DyoOrderDetailComponent },
    { path:'dyo-cancelOrder', component:DyoCancelOrderComponent },
    {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
