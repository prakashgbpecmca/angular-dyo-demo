import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IPrdouctDetailList } from 'src/app/service/service';
import { ServiceService } from 'src/app/service/service.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { NgForm } from '@angular/forms';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  public modalRef: BsModalRef;
  public storeActive:boolean;
  public open:boolean;
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
  public productDetailList:IPrdouctDetailList[];
  public productUnit:IPrdouctDetailList[];
  public productCategorie:IPrdouctDetailList[];
  public searchText:string='';

  productDetail= new Product();

  onSubmit(product: NgForm) {
    console.log(product.value);
  }

  constructor(private _router:Router,private modalService: BsModalService, private _service:ServiceService) {
    setTheme('bs3'); // or 'bs4'
    this.user='assets/user.png';
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

      drpClick(){
        this.open=!this.open;
      }

      
      openModalWithClass(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
          template,
          Object.assign({}, { class: 'gray modal-lg' })
        );
      }
      addProductClass(addProduct: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
          addProduct,
          Object.assign({}, { class: 'gray modal-lg' })
        );
      }
      addProductDelClass(addProductDel: TemplateRef<any>) {
        this.modalRef = this.modalService.show(
          addProductDel,
          Object.assign({}, { class: 'gray modal-md' })
        );
      }

    
      returnedArray=[];

      pageChanged(event: PageChangedEvent): void {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.productDetailList.slice(startItem, endItem);
      }

  ngOnInit() {
    this.productDetailList=this._service.productDetailList();
    this.productUnit=this._service.productUnit();
    this.productCategorie=this._service.productCategorie();
    this.returnedArray = this.productDetailList.slice(0, 10);
    this.on=false;
  }

}
