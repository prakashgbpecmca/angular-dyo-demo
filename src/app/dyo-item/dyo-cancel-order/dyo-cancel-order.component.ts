import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DyoService } from '../dyo.service';

@Component({
  selector: 'app-dyo-cancel-order',
  templateUrl: './dyo-cancel-order.component.html',
  styleUrls: ['./dyo-cancel-order.component.less']
})
export class DyoCancelOrderComponent implements OnInit {


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



  
  constructor(private _router:Router,private modalService: BsModalService, private _dyoService:DyoService) {
    setTheme('bs3'); // or 'bs4'
    this.logo='assets/logo.png';
    this.user='assets/user.png';
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


 backDesign(){
   alert('You are back to design screen.');
   this._router.navigate(['/dyo-design']);
 }

 forwordOrderDetail(){
  alert('You move to order detail screen.');
  this._router.navigate(['/dyo-orderDetail']);
 }

   logout(){
    alert('You have successfully Logout.');
    this._router.navigate(['/login']);
  }
  
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-md' })
    );
  }
      
  ngOnInit() {
    this.on=false;
  }

}
