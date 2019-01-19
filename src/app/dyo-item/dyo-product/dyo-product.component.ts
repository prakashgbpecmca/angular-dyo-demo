import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IDyo } from '../dyo';
import { DyoService } from '../dyo.service';

@Component({
  selector: 'app-dyo-product',
  templateUrl: './dyo-product.component.html',
  styleUrls: ['./dyo-product.component.less']
})
export class DyoProductComponent implements OnInit {
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
  public right:boolean;
  public left:boolean;
  public lowerRight:boolean;
  public lowerLeft:boolean;
  public insertName:boolean;
  public insertNumber:boolean;
  public printingStyle:IDyo[]=[];
  public logoDimension:IDyo[]=[];
  public font:IDyo[]=[];
  public color:IDyo[]=[];
  public image:IDyo[]=[];

  public shirt1:string;
  public tSixdeg:string;
  public screenshot:string;
  public actionPanel:boolean;
  public sectionOne:boolean;
  public sectionTwo:boolean;
  public sectionThree:boolean;



 
  
  constructor(private _router:Router,private modalService: BsModalService, private _dyoService:DyoService) {
    setTheme('bs3'); // or 'bs4'
    this.logo='assets/logo.png';
    this.user='assets/user.png';
    this.shockImg='assets/shock.png';
    this.shirt1='assets/shirt/1.png';
    this.tSixdeg='assets/360_transparent.png';
    this.screenshot='assets/screenshot_transparent.png';
  }

  sectionOneOk(){
    this.sectionOne=true;
    this.sectionTwo=false;
    this.sectionThree=false;
  }
  sectionTwoOk(){
    this.sectionOne=false;
    this.sectionTwo=true;
    this.sectionThree=false;
  }
  sectionThreeOk(){
    this.sectionOne=false;
    this.sectionTwo=false;
    this.sectionThree=true;
  }

  actionPanelOk(){
    this.actionPanel=true;
  }
  closeActionPanel(){
    this.actionPanel=false;
  }

  insertNumberOk(){
    this.insertNumber=!this.insertNumber;
  }

  insertNameOk(){
    this.insertName=!this.insertName;
  }

  lowerRightOk(){
    this.lowerRight=!this.lowerRight;
  }

  lowerLeftOk(){
    this.lowerLeft=!this.lowerLeft;
  }

  leftOk(){
    this.left=!this.left;
  }

  rightOk(){
    this.right=!this.right;
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
    this.printingStyle=this._dyoService.printingStyle();
    this.logoDimension=this._dyoService.logoDimension();
    this.font=this._dyoService.font();
    this.color=this._dyoService.color();
    this.image=this._dyoService.image();
    this.on=false;
    this.insertName=true;
    this.actionPanel=false;
    this.sectionOne=true;
  }

}
