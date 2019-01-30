import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ServiceService } from "../service/service.service";
import { IDashboard } from "../service/service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { setTheme } from 'ngx-bootstrap/utils';
import { ProfileComponent } from "../profile/profile.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
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
  public dashboard: IDashboard[];
  userInfo: any;
  constructor(
    private _router: Router,
    private _service: ServiceService,
    private _modalService: NgbModal
  ) {
    setTheme('bs3'); // or 'bs4'
    this.user = "assets/user.png";
    this.products = "assets/product.png";
    this.logo = "assets/logo.png";
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

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    alert("You have successfully Logout.");
    this._router.navigate(["/login"]);
  }

  openModalProfile(): void {
    let options: NgbModalOptions = { size: "lg" };
    let modalRef = this._modalService.open(ProfileComponent, options);
    modalRef.componentInstance.UserId = 1; // this.userInfo.UserId;

    modalRef.result.then(
      function() {
       // this.activeUsers();
      },
      function() {}
    );
  }

  // openModalWithClass(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(
  //     template,
  //     Object.assign({}, { class: "gray modal-lg" })
  //   );
  // }

  ngOnInitopenModalProfile() {
    this.dashboard = this._service.dashboardData();
    this.on = false;
  }
  ngOnInit(): void {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
  }
}
