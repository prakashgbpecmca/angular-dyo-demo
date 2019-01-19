import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { setTheme } from "ngx-bootstrap/utils";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { IProductDataList } from "src/app/service/service";
import { ServiceService } from "src/app/service/service.service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { UserAddEditComponent } from "./user-add-edit.component";
import { UserService } from "./user.service";
import { ITrackUser } from "./user";
import { CommonModalComponent } from '../shared/common-modal.component';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.less"]
})
export class UserComponent implements OnInit {
  public modalRef: BsModalRef;
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
  public productDataDetail: IProductDataList[];
  public searchText = "";
  public trackUser: ITrackUser = {
    UserId: 0,
    TakeRows: 0,
    CurrentPage: 0
  };
  activeUsers: any[];
  constructor(
    private _router: Router,
    private modalService: BsModalService,
    private _service: ServiceService,
    private _userService: UserService,
    private _modalService: NgbModal
  ) {
    setTheme("bs3"); // or 'bs4'
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
    alert("You have successfully Logout.");
    this._router.navigate(["/login"]);
  }
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  addUser(): void {
    let options: NgbModalOptions = { size: "lg" };
    let modalRef = this._modalService.open(UserAddEditComponent, options);
    modalRef.componentInstance.type = "Add";
    modalRef.result.then(function() {}, function() {});
  }

  performAction(id: number): void {
    this._userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteUser(id: number): void {
    if (id) {
      let options: NgbModalOptions = { size: "sm" };
      let modalRef = this._modalService.open(CommonModalComponent, options);
      modalRef.componentInstance.type = "Confirmation";
      modalRef.componentInstance.context = this;
      modalRef.componentInstance.message = 'Are you sure, you want to delete this user?';
      modalRef.result.then( result => {
        this._userService.deleteUser(id).subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        );
      }, reason => {
        console.log(reason);
      });
    }
  }
  viewDetail(id: number): void {
    if (id) {
      let options: NgbModalOptions = { size: "lg" };
      let modalRef = this._modalService.open(UserAddEditComponent, options);
      modalRef.componentInstance.type = "Edit";
      modalRef.componentInstance.UserId = id;
      modalRef.result.then(function() {}, function() {});
    }
  }
  ngOnInit() {
    this.productDataDetail = this._service.productDataList();

    this._userService.getUserList(this.trackUser).subscribe(
      data => {
        this.activeUsers = data;
      },
      error => {
        console.log(error);
      }
    );
    // !do not remove it
    this.on = false;
  }
}
