import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { NgbModal, NgbModalOptions } from "@ng-bootstrap/ng-bootstrap";
import { IDyo } from '../dyo';
import { DyoService } from '../dyo.service';
import { MycartAddEditComponent } from './mycart-add-edit.component';

@Component({
  selector: 'app-dyo-mycart',
  templateUrl: './dyo-mycart.component.html',
  styleUrls: ['./dyo-mycart.component.less']
})
export class DyoMycartComponent implements OnInit {

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

  public mycart:IDyo[]=[];


  
  constructor(private _router:Router, private _dyoService:DyoService,private _modalService: NgbModal) {
    setTheme('bs3'); // or 'bs4'
    this.logo='assets/logo.png';
    this.user='assets/user.png';
  }

  saveCollection(): void {
    let options: NgbModalOptions = { size: 'lg', centered: true };
    let modalRef = this._modalService.open(MycartAddEditComponent, options);
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


 backDesign(){
   alert('You are back to design screen.');
   this._router.navigate(['/dyo/design']);
 }

 forwardOrderPlaced(){
   alert('You are move in order placed screen.');
   this._router.navigate(['/dyo-orderPlaced']);
 }


   logout(){
    alert('You have successfully Logout.');
    this._router.navigate(['/login']);
  }
  
      
  ngOnInit() {
    this.mycart=this._dyoService.mycart();
    this.on=false;
  }

}
