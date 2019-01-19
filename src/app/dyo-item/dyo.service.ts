import { Injectable } from '@angular/core';
import { IDyo } from './dyo';

@Injectable({ 
  providedIn: 'root'
})
export class DyoService {
  stockItems():IDyo[]{
    return [
      {id:1, name:'socks',stock:'Stock: 200 pcs', img:'assets/shock.png', active:true},
      {id:2, name:'Man Training Tee',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:3, name:'JNR Training Tee',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:4, name:'Women Core Training Tee',stock:'200 pcs', img:'assets/shock.png', active:false},
      {id:5, name:'Men Media Polo',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:6, name:'Women Media Polo',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:7, name:'Men Cotton Polo',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:8, name:'Men Elite Rugday Shorts',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:9, name:'JNR Elite Rugday Shorts',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:10, name:'Men Gym Shorts',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:11, name:'Women Gym Shorts',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:12, name:'Unisea Pullore Flear Hoodie',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:13, name:'JNR Pullore Flear Hoodie',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:14, name:'Chisea Wet Wether Traus Pant',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false},
      {id:15, name:'Men Dry Traus Pant',stock:'Stock: 200 pcs', img:'assets/shock.png', active:false}
    ]
  };

  printingStyle():IDyo[]{
    return[
      {id:1, name:'Embroidery', active:true},
      {id:2, name:'Get Printing', active:true},
      {id:3, name:'Rubber Print', active:true},
      {id:4, name:'Screen Printing', active:true},
      {id:5, name:'Normal Printing', active:true}
    ]
  }

  logoDimension():IDyo[]{
    return[
      {id:1, value:'1',active:true},
      {id:2, value:'2',active:true},
      {id:3, value:'3',active:true},
      {id:4, value:'4',active:true},
      {id:5, value:'5',active:true}
    ]
  }

  font():IDyo[]{
    return[
      {id:1,name:'Times New Roman',active:true},
      {id:2,name:'Georgia',active:true},
      {id:3,name:'sans-serif',active:true},
      {id:4,name:'serif',active:true},
      {id:5,name:'Helvetica',active:true},
      {id:6,name:'Arial',active:true},
      {id:7,name:'Verdana',active:true},
      {id:8,name:'monospace',active:true},
      {id:9,name:'cursive',active:true},
      {id:10,name:'fantasy',active:true}
    ]
  }

  color():IDyo[]{
    return [
      {id:1, color:'#1c1c1d', active:true},
      {id:2, color:'#ad296d', active:true},
      {id:3, color:'#fbdbe4', active:true},
      {id:4, color:'#b8194d', active:true},
      {id:5, color:'#d21569', active:true},
      {id:6, color:'#008282', active:true},
      {id:7, color:'#01ffbd', active:true},
      {id:8, color:'#50ff91', active:true},
      {id:9, color:'#8fd000', active:true},
      {id:10, color:'#4f3d10', active:true},
      {id:11, color:'#115022', active:true},
      {id:12, color:'#3c3d3d', active:true},
      {id:13, color:'#c9675f', active:true},
      {id:14, color:'	#6047c2', active:true},
      {id:15, color:'#f2dc04', active:true},
      {id:16, color:'#f46606', active:true},
      {id:17, color:'#f4a40a', active:true},
      {id:18, color:'	#1a92ab', active:true},
      {id:19, color:'	#ba6767', active:true},
      {id:20, color:'#7a1717', active:true}

    ]
  }

  image():IDyo[]{
    return [
      {id:1, name:'Jersey 01 front', img:'assets/RugbyJerseyThumbnails/Jersey_01_front.png', active:true},
      {id:2, name:'Jersey 02 front', img:'assets/RugbyJerseyThumbnails/Jersey_02_front.png', active:true},
      {id:3, name:'Jersey 03 front', img:'assets/RugbyJerseyThumbnails/Jersey_03_front.png', active:true},
      {id:4, name:'Jersey 04 front', img:'assets/RugbyJerseyThumbnails/Jersey_04_front.png', active:true},
      {id:5, name:'Jersey 05 front', img:'assets/RugbyJerseyThumbnails/Jersey_05_front.png', active:true},
      {id:6, name:'Jersey 06 front', img:'assets/RugbyJerseyThumbnails/Jersey_06_front.png', active:true},
      {id:7, name:'Jersey 07 front', img:'assets/RugbyJerseyThumbnails/Jersey_07_front.png', active:true},
      {id:8, name:'Jersey 08 front', img:'assets/RugbyJerseyThumbnails/Jersey_08_front.png', active:true},
      {id:9, name:'Jersey 09 front', img:'assets/RugbyJerseyThumbnails/Jersey_09_front.png', active:true},
      {id:10, name:'Jersey 10 front', img:'assets/RugbyJerseyThumbnails/Jersey_10_front.png', active:true},
      {id:11, name:'Jersey 11 front', img:'assets/RugbyJerseyThumbnails/Jersey_11_front.png', active:true},
      {id:12, name:'Jersey 12 front', img:'assets/RugbyJerseyThumbnails/Jersey_12_front.png', active:true},
      {id:13, name:'Jersey 13 front', img:'assets/RugbyJerseyThumbnails/Jersey_13_front.png', active:true},
      {id:14, name:'Jersey 14 front', img:'assets/RugbyJerseyThumbnails/Jersey_14_front.png', active:true},
      {id:15, name:'Jersey 15 front', img:'assets/RugbyJerseyThumbnails/Jersey_15_front.png', active:true},
      {id:16, name:'Jersey 16 front', img:'assets/RugbyJerseyThumbnails/Jersey_16_front.png', active:true},
      {id:17, name:'Jersey 17 front', img:'assets/RugbyJerseyThumbnails/Jersey_17_front.png', active:true},
      {id:18, name:'Jersey 18 front', img:'assets/RugbyJerseyThumbnails/Jersey_18_front.png', active:true},
      {id:19, name:'Jersey 19 front', img:'assets/RugbyJerseyThumbnails/Jersey_19_front.png', active:true},
      {id:20, name:'Jersey 20 front', img:'assets/RugbyJerseyThumbnails/Jersey_20_front.png', active:true},
      {id:21, name:'Jersey 21 front', img:'assets/RugbyJerseyThumbnails/Jersey_21_front.png', active:true},
      {id:22, name:'Jersey 22 front', img:'assets/RugbyJerseyThumbnails/Jersey_22_front.png', active:true},
      {id:23, name:'Jersey 23 front', img:'assets/RugbyJerseyThumbnails/Jersey_23_front.png', active:true},
      {id:24, name:'Jersey 24 front', img:'assets/RugbyJerseyThumbnails/Jersey_24_front.png', active:true},
      {id:25, name:'Jersey 25 front', img:'assets/RugbyJerseyThumbnails/Jersey_25_front.png', active:true},
      {id:26, name:'Jersey 26 front', img:'assets/RugbyJerseyThumbnails/Jersey_26_front.png', active:true},
      {id:27, name:'Jersey 27 front', img:'assets/RugbyJerseyThumbnails/Jersey_27_front.png', active:true},
      {id:28, name:'Jersey 28 front', img:'assets/RugbyJerseyThumbnails/Jersey_28_front.png', active:true},
      {id:29, name:'Jersey 29 front', img:'assets/RugbyJerseyThumbnails/Jersey_29_front.png', active:true},
      {id:30, name:'Jersey 30 front', img:'assets/RugbyJerseyThumbnails/Jersey_30_front.png', active:true},
      {id:31, name:'Jersey 31 front', img:'assets/RugbyJerseyThumbnails/Jersey_31_front.png', active:true},
      {id:32, name:'Jersey 32 front', img:'assets/RugbyJerseyThumbnails/Jersey_32_front.png', active:true}
    ]
  }

  mycart():IDyo[]{
    return [
      {id:1, img:'assets/shirt/cart_img.png', name:'Sachin', product:'Men Polo Shirt', productNumber:'PD1C101825', number:10, active:true},
      {id:2, img:'assets/shirt/cart_img.png', name:'Virat', product:'Men Polo Shirt', productNumber:'PD1C101826', number:12, active:true},
      {id:3, img:'assets/shirt/cart_img.png', name:'Sabrina', product:'Women Training Tee', productNumber:'PD1C101827', number:15, active:true}
    ]
  }

  myorder():IDyo[]{
    return [
      {id:1, order:'#PA0124579', date:'Jan 07, 2019', status:'In Production', customer:'ABL SPORTS', active:true},
      {id:1, order:'#PA0124580', date:'Jan 05, 2019', status:'Pre-order', customer:'ABL SPORTS', active:true},
      {id:1, order:'#PA0124581', date:'Jan 04, 2019', status:'In Production', customer:'ABL SPORTS', active:true}
    ]
  }

  placeOrderRadio():IDyo[]{
    return [
      {id:1, name:'Standard Delivery', active:true},
      {id:2, name:'Express Delivery', active:true},
      {id:3, name:'Urgent Delivery', active:true}
    ]
  }

  placeOrderData():IDyo[]{
    return [
      {id:1, img:'assets/shirt/cart_img.png', product:'Men Polo Shirt', productNumber:'PD1C101825', name:'Sachin', number:10, extraSmall:2, small:4, medium:1, large:5, doubleExtraLarge:2, thripleExtraLarge:1, total:15, active:true},
      {id:2, img:'assets/shirt/cart_img.png', product:'Men Polo Shirt', productNumber:'PD1C101826', name:'Virat', number:12, extraSmall:1, small:4, medium:1, large:2, doubleExtraLarge:1, thripleExtraLarge:5, total:14, active:true}
    ]
  }
  constructor() { }
}
