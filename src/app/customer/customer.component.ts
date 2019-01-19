import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IDashboard } from '../service/service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
  public modalRef: BsModalRef;
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
  public dashboard:IDashboard[];


  constructor(private _router:Router,private modalService: BsModalService, private _service:ServiceService) {
    setTheme('bs3'); // or 'bs4'
    this.user="assets/user.png";
    this.products='assets/product.png';
    this.logo='assets/logo.png';
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
    this.dashboard=this._service.dashboardData();
    this.on=false;
  }

}
