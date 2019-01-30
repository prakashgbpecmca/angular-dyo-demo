import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ServiceService } from 'src/app/service/service.service';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { IProductData } from 'src/app/service/service';
import { CommonModalComponent } from "../shared/common-modal.component";
import { RackAddEditComponent } from './rack-add-edit.component';


@Component({
  selector: 'app-rack',
  templateUrl: './rack.component.html',
  styleUrls: ['./rack.component.less']
})
export class RackComponent implements OnInit {
  public modalRef: BsModalRef;
  public productData:IProductData[];
  public user:string;
  public products:string;
  public logo:string;
  public customer:boolean;
  public bellActive:boolean;
  public shopActive:boolean;
  public users:boolean;
  public order:boolean;
  public placeOrder:boolean;
  public warehouse:boolean;
  public rack:boolean;
  public product:boolean;
  public accessControl:boolean;
  public on=true;

  constructor(private _service:ServiceService, private _router:Router,private modalService: BsModalService , private _modalService: NgbModal) {
    setTheme('bs3'); // or 'bs4'
    this.logo='assets/logo.png';
    this.user='assets/user.png';
   }

   addUser(): void {
    let options: NgbModalOptions = { size: "lg" };
    let modalRef = this._modalService.open(RackAddEditComponent, options);
    modalRef.componentInstance.type = "Add";
    modalRef.result.then(function() {}, function() {});
  }
   customerOk(){
    this.customer=!this.customer;
  }

  userOk(){
    this.users=!this.users;
  }

  placeOrderOk(){
    this.placeOrder=!this.placeOrder;
  }

  orderOk(){
   this.order=!this.order;
  }

  warehouseOk(){
    this.warehouse=!this.warehouse;
  }

  rackOk(){
    this.rack=!this.rack;
  }

  productOk(){
    this.product=!this.product;
  }

  accessControlOk(){
    this.accessControl=!this.accessControl;
  }

   scrollActive(){
     this.on=!this.on;
   }


  bell () {
   this.bellActive = !this.bellActive;
   this.shopActive=false;
};

 shop(){
   this.shopActive=!this.shopActive;
   this.bellActive=false;
 }

   logout(){
    alert('You have successfully Logout.');
    this._router.navigate(['/login']);
  }
  
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  ngOnInit() {
    this.productData=this._service.productData();
    this.on=false;
  }

}
