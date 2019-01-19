import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DyoService } from './dyo.service';
import { IDyo } from './dyo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dyo-item',
  templateUrl: './dyo-item.component.html',
  styleUrls: ['./dyo-item.component.less']
})
export class DyoItemComponent implements OnInit {
  public modalRef: BsModalRef;
  public storeActive:boolean;
  public productActive:boolean;
  public productDetailActive:boolean;
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
  public stockItem:IDyo[]=[];
  public dyoProductOk:boolean;
  public shockImg:string;
 


  constructor(private _router:Router,private modalService: BsModalService, private _dyoService:DyoService, private _location:Location) {
    setTheme('bs3'); // or 'bs4'
    this.logo='assets/logo.png';
    this.user='assets/user.png';
    this.shockImg='assets/shock.png';
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

   dyoProduct(){
     this.dyoProductOk=true;
   }


  bell () {
   this.bellActive = !this.bellActive;
   this.shopActive=false;
};

 shop(){
   this.shopActive=!this.shopActive;
   this.bellActive=false;
 }

 onBack(){
this.dyoProductOk=false;
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
    this.stockItem=this._dyoService.stockItems();
    this.on=false;
  }

}
