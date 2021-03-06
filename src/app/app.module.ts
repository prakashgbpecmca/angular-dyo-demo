import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {FileUploadModule} from 'ng2-file-upload';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { AppRoutingModule } from "./app-routing.module";
import { LoginModule } from "./login/login.module";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { ProductComponent } from "./product/product.component";
import { WarehouseComponent } from "./warehouse/warehouse.component";
import { OrdersComponent } from "./orders/orders.component";
import { DyoItemComponent } from "./dyo-item/dyo-item.component";
import { FilterPipe } from "./customer/filter.pipe";
import { CustomerComponent } from "./customer/customer.component";
import { AccessControlComponent } from "./accessControl/accessControl.component";
import { RackComponent } from "./rack/rack.component";
import { UserPipe } from "./user/user.pipe";
import { UserComponent } from "./user/user.component";
import { DyoProductComponent } from "./dyo-item/dyo-product/dyo-product.component";
import { DyoFinishComponent } from "./dyo-item/dyo-finish/dyo-finish.component";
import { DyoMycartComponent } from "./dyo-item/dyo-mycart/dyo-mycart.component";
import { DyoOrderPlacedComponent } from "./dyo-item/dyo-order-placed/dyo-order-placed.component";
import { DyoOrderDetailComponent } from "./dyo-item/dyo-order-detail/dyo-order-detail.component";
import { DyocustomerPipe } from "./dyo-item/dyo-order-detail/dyocustomer.pipe";
import { DyodatePipe } from "./dyo-item/dyo-order-detail/dyodate.pipe";
import { DyoorderPipe } from "./dyo-item/dyo-order-detail/dyoorder.pipe";
import { DyoCancelOrderComponent } from "./dyo-item/dyo-cancel-order/dyo-cancel-order.component";
import { ProductPipe } from "./product/product.pipe";
import { SecurityModule } from "./security/security.module";
import { HttpClientModule } from "@angular/common/http";
import { UserAddEditComponent } from "./user/user-add-edit.component";
import { SelectRequiredValidator } from "./shared/select-required-validator.directive";
import { CommonModalComponent } from "./shared/common-modal.component";
import { ForgetPasswordComponent } from "./login/forget-password.component";
import { HomeModule } from "./home/home.module";
import { HomeRoutingModule } from "./home/home-routing.module";
import { DyoComponent } from "./dyo-item/dyo.component";
import { RackAddEditComponent } from "./rack/rack-add-edit.component";
import { MycartAddEditComponent } from "./dyo-item/dyo-mycart/mycart-add-edit.component";
import { DyoViewSavedComponent } from "./dyo-item/dyo-mycart/dyo-view-saved.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerComponent,
    PageNotFoundComponent,
    UserComponent,
    ProductComponent,
    RackComponent,
    AccessControlComponent,
    WarehouseComponent,
    OrdersComponent,
    FilterPipe,
    UserPipe,
    DyoItemComponent,
    DyoProductComponent,
    DyoFinishComponent,
    DyoMycartComponent,
    DyoOrderPlacedComponent,
    DyoOrderDetailComponent,
    DyocustomerPipe,
    DyodatePipe,
    DyoorderPipe,
    DyoCancelOrderComponent,
    ProductPipe,
    UserAddEditComponent,
    SelectRequiredValidator,
    CommonModalComponent,
    ForgetPasswordComponent,
    DyoComponent,
    RackAddEditComponent,
    MycartAddEditComponent,
    DyoViewSavedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FileUploadModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    SecurityModule,
    NgbModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  entryComponents: [
    UserAddEditComponent,
    CommonModalComponent,
    RackAddEditComponent,
    MycartAddEditComponent,
    DyoViewSavedComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
