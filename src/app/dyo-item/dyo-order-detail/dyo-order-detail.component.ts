import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { setTheme } from "ngx-bootstrap/utils";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { IDyo } from "../dyo";
import { DyoService } from "../dyo.service";

@Component({
  selector: "app-dyo-order-detail",
  templateUrl: "./dyo-order-detail.component.html",
  styleUrls: ["./dyo-order-detail.component.less"]
})
export class DyoOrderDetailComponent implements OnInit {
  public modalRef: BsModalRef;
  public storeActive: boolean;
  public productActive: boolean;
  public productDetailActive: boolean;
  public user: string;
  public products: string;
  public logo: string;
  public customer: boolean;
  public bellActive: boolean;
  public shopActive: boolean;
  public users: boolean;
  public order: boolean;
  public placeOrder: boolean;
  public warehouse: boolean;
  public rack: boolean;
  public product: boolean;
  public accessControl: boolean;
  public on = true;
  public customerName: string = "";
  public dateName: string = "";
  public searchName: string = "";
  public myorder: IDyo[] = [];
  public mycart: IDyo[] = [];
  public placeOrderRadio: IDyo[] = [];
  public placeOrderData: IDyo[] = [];
  public communication: boolean;

  constructor(
    private _router: Router,
    private modalService: BsModalService,
    private _dyoService: DyoService
  ) {
    setTheme("bs3"); // or 'bs4'
    this.logo = "assets/logo.png";
    this.user = "assets/user.png";
  }

  communicationOk() {
    this.communication = !this.communication;
  }

  customerOk() {
    this.customer = !this.customer;
  }

  userOk() {
    this.users = !this.users;
  }

  placeOrderOk() {
    this.placeOrder = !this.placeOrder;
  }

  orderOk() {
    this.order = !this.order;
  }

  warehouseOk() {
    this.warehouse = !this.warehouse;
  }

  rackOk() {
    this.rack = !this.rack;
  }

  productOk() {
    this.product = !this.product;
  }

  accessControlOk() {
    this.accessControl = !this.accessControl;
  }

  scrollActive() {
    this.on = !this.on;
  }

  bell() {
    this.bellActive = !this.bellActive;
    this.shopActive = false;
  }

  shop() {
    this.shopActive = !this.shopActive;
    this.bellActive = false;
  }

  backDesign() {
    alert("You are back to design screen.");
    this._router.navigate(["/dyo-design"]);
  }

  forwardOrderPlaced() {
    alert("You are move in order placed screen.");
    this._router.navigate(["/dyo-orderPlaced"]);
  }

  logout() {
    alert("You have successfully Logout.");
    this._router.navigate(["/login"]);
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "gray modal-md" })
    );
  }

  orderCancelClass(orderCancel: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      orderCancel,
      Object.assign({}, { class: "gray modal-md" })
    );
  }

  viewOrderClass(viewOrder: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      viewOrder,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  PlaceOrderFactoryClass(placeOrderFactory: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      placeOrderFactory,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  orderDetailClass(orderDetail: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      orderDetail,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  reasonClass(reason: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      reason,
      Object.assign({}, { class: "gray modal-md" })
    );
  }

  viewTrackingClass(viewTracking: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      viewTracking,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  updateTrackingClass(updateTracking: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      updateTracking,
      Object.assign({}, { class: "gray modal-md" })
    );
  }
  ngOnInit() {
    this.myorder = this._dyoService.myorder();
    this.mycart = this._dyoService.mycart();
    this.placeOrderRadio = this._dyoService.placeOrderRadio();
    this.placeOrderData = this._dyoService.placeOrderData();
    this.on = false;
  }
}
