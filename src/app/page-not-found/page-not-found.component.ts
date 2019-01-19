import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.less']
})
export class PageNotFoundComponent implements OnInit {
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


  constructor(private _router:Router) {
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


  ngOnInit() {
    this.on=false;
  }

}
