import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from '../customer/customer.component';
import { UserComponent } from '../user/user.component';
import { AccessControlComponent } from '../accessControl/accessControl.component';
import { ProductComponent } from '../product/product.component';
import { RackComponent } from '../rack/rack.component';
import { WarehouseComponent } from '../warehouse/warehouse.component';
import { OrdersComponent } from '../orders/orders.component';
import { DyoItemComponent } from '../dyo-item/dyo-item.component';
import { DyoProductComponent } from '../dyo-item/dyo-product/dyo-product.component';
import { DyoFinishComponent } from '../dyo-item/dyo-finish/dyo-finish.component';
import { DyoMycartComponent } from '../dyo-item/dyo-mycart/dyo-mycart.component';
import { DyoOrderPlacedComponent } from '../dyo-item/dyo-order-placed/dyo-order-placed.component';
import { DyoOrderDetailComponent } from '../dyo-item/dyo-order-detail/dyo-order-detail.component';
import { DyoCancelOrderComponent } from '../dyo-item/dyo-cancel-order/dyo-cancel-order.component';

export const featureRoutes: Routes = [
  { path: "customer", component: CustomerComponent },
  { path: "user", component: UserComponent },
  { path: "accessControl", component: AccessControlComponent },
  { path: "product", component: ProductComponent },
  { path: "rack", component: RackComponent },
  { path: "warehouse", component: WarehouseComponent },
  { path: "orders", component: OrdersComponent },
  { path: "dyo", component: DyoItemComponent },
  { path: "dyo-design", component: DyoProductComponent },
  { path: "dyo-finish", component: DyoFinishComponent },
  { path: "dyo-mycart", component: DyoMycartComponent },
  { path: "dyo-orderPlaced", component: DyoOrderPlacedComponent },
  { path: "dyo-orderDetail", component: DyoOrderDetailComponent },
  { path: "dyo-cancelOrder", component: DyoCancelOrderComponent },

  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
