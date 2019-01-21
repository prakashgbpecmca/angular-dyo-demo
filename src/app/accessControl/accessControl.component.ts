import { Component, OnInit, TemplateRef } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IStore } from 'src/app/service/service';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

import { AccessControlService } from './access-control.service';

@Component({
  selector: 'app-accessControl',
  templateUrl: './accessControl.component.html',
  styleUrls: ['./accessControl.component.less']
})
export class AccessControlComponent implements OnInit {
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
  public open:boolean;
  public accessUser:any = {};
  public accessHasError:boolean;   
  public producted:IStore[];
  

  constructor(private _service:ServiceService,private _accessControlService:AccessControlService ,private _router:Router,private modalService: BsModalService) {
    setTheme('bs3'); // or 'bs4'
    this.user='assets/user.png';
    this.products='assets/product.png';
    this.logo='assets/logo.png';
  }

  drpClick(){
    this.open=!this.open;
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
      Object.assign({}, { class: 'gray modal-lg exl' })
    );
  }
  
 //Yogi Code Start
  validateUser(value) {
    if (value === '0') {
      this.accessHasError = true;     
    } else {
      this.accessHasError = false;    
    }
    this._accessControlService.getAccessUserById(value)
    .subscribe(data=>console.log(this.accessUser=data));
  }
  
  AssignModuleScreen()
  {
    this._accessControlService.assignModuleToUser(this.accessUser)
    .subscribe(
      data=>console.log("Save Data",this.accessUser=data),
      error=>console.log('Error',error)
      );
    
 //End
  }
  ngOnInit() {
    //Start
    this.accessHasError = true;
    this._accessControlService.getAccessUserById('0')
    .subscribe(data=>console.log(this.accessUser=data));
    
    //End

    this.producted=this._service.storeData();
    this.on=false;
  }

}
