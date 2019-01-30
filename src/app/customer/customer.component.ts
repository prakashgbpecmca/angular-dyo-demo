import { Component, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { IProductDataList } from "src/app/service/service";
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { CommonModalComponent } from "../shared/common-modal.component";
import { ITrackUser } from '../user/user';
import { UserService } from '../user/user.service';
import { CustomerService } from './customer.service';
import { CustomerAddEditComponent } from './customer-add-edit.component';

@Component({
  selector: "app-customre",
  templateUrl: "./customer.component.html",
})
export class CustomerComponent implements OnInit {
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
    RoleId: 0,
    TakeRows: 0,
    CurrentPage: 0,
    FromDate: null,
    ToDate: null
  };
  activeUsers: any[];
  constructor(
    private _router: Router,
    private modalService: BsModalService,
    private _userService: UserService,
    private _customerService: CustomerService,
    private _modalService: NgbModal
  ) {
    this.user = "assets/user.png";
    this.products = "assets/product.png";
    this.logo = "assets/logo.png";
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: "gray modal-lg" })
    );
  }

  addCustomer(): void {
    let options: NgbModalOptions = { size: "lg" };
    let modalRef = this._modalService.open(CustomerAddEditComponent, options);
    modalRef.componentInstance.type = "Add";
    modalRef.componentInstance.UserId = 0;
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
      modalRef.componentInstance.message =
        "Are you sure, you want to delete this user?";
      modalRef.result.then(
        result => {
          this._userService.deleteUser(id).subscribe(
            data => {
              console.log(data);
              this.getActiveUsers();
            },
            error => {
              console.log(error);
            }
          );
        },
        reason => {
          console.log(reason);
        }
      );
    }
  }
  viewDetail(id: number): void {
    if (id) {
      let options: NgbModalOptions = { size: "lg" };
      let modalRef = this._modalService.open(CustomerAddEditComponent, options);
      modalRef.componentInstance.type = "Edit";
      modalRef.componentInstance.UserId = id;
      modalRef.result.then(function() {
        this.activeUsers();
      }, function() {});
    }
  }

  getActiveUsers(): void {
    this._userService.getUserList(this.trackUser).subscribe(
      data => {
        this.activeUsers = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.getActiveUsers();
  }
}
