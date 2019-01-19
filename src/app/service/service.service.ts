import { Injectable } from '@angular/core';
import { IStore, IDashboard, IProductData, IProductDataList, IPrdouctDetailList } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  storeData():IStore[]{
    return [
      {id:1,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:2,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:3,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:4,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:5,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:6,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:7,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:8,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:9,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true},
      {id:10,productName:'Clothes',productPrice:1000.00,description:'Men & Women all clothes here.',IsActive:true}
    ]
  }

  dashboardData():IDashboard[]{
    return[
      {id:1, img:'assets/product.png',name:'Store', description:'Store Description here.',link:'/store()', IsActive:true},
      {id:2, img:'assets/product.png',name:'Product', description:'Product Description here.',link:'/product()', IsActive:true},
      {id:3, img:'assets/product.png',name:'Product Detail', description:'Product Detail Description here.',link:'/productDetail()', IsActive:true},
      {id:4, img:'assets/product.png',name:'Store', description:'Store Description here.',link:'/store()', IsActive:true},
      {id:5, img:'assets/product.png',name:'Product', description:'Product Description here.',link:'/product()', IsActive:true},
      {id:6, img:'assets/product.png',name:'Product Detail', description:'Product Detail Description here.',link:'/productDetail()', IsActive:true},
      {id:7, img:'assets/product.png',name:'Store', description:'Store Description here.',link:'/store()', IsActive:true},
      {id:8, img:'assets/product.png',name:'Product', description:'Product Description here.',link:'/product()', IsActive:true},
      {id:9, img:'assets/product.png',name:'Product Detail', description:'Product Detail Description here.',link:'/productDetail()', IsActive:true}
    ]
  }

  productData():IProductData[]{
    return[
      {id:1, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:2, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:3, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:4, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:5, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:6, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:7, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:8, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:9, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:10, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true},
      {id:11, supplier:'Whytecliff Group Ltd.', invoiceDate:'01/05/2018',responsible:'Verintita Chanapim (Tangmay - HKG)', currency:'HKG',total:350.00, IsActive:true}
    ]
  }

  productDataList():IProductDataList[]{
    return [
      {id:1, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:2, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'ChildsOwn (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:3, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Irasys SoftTech (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:4, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Red Bull (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:5, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Niky Royal (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:6, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:7, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:8, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:9, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:10, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:11, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:12, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:13, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:14, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:15, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:16, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:17, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:18, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:19, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:20, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:21, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:22, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:23, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:24, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:25, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:26, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:27, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:28, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:29, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:30, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:31, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:32, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:33, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:34, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:35, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:36, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:37, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:38, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:39, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:40, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:41, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:42, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:43, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:44, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:45, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:46, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:47, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:48, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:49, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'},
      {id:50, date:'12/12/2018',number:'BNK8/2018/0472', ref:'HK113128BI788473',partner:'Vytal Support (Thailand) Co. Ltd.',journal:'HSBC Hong Kong 747-005205-001 (C/A) (HKD)',total:15574.40,status:'Posted'}
    ]
  }

  productDetailList():IPrdouctDetailList[]{
    return[
      {id:1, productName:'T-shirt', skuCode:'LNS-BLK-TS-XL', unit:'pcs', size:'xl', active:true},
      {id:2, productName:'Jacket', skuCode:'LNS-BRW-JK-SM', unit:'pcs', size:'sm', active:true},
      {id:3, productName:'Trouser', skuCode:'LNS-BLK-TR-L', unit:'pcs', size:'l', active:true},
      {id:4, productName:'Jeans', skuCode:'LNS-BLU-JE-L', unit:'pcs', size:'l', active:true},
      {id:5, productName:'Shirt', skuCode:'LNS-PNK-SH-L', unit:'pcs', size:'l', active:true},
      {id:6, productName:'Pant', skuCode:'LNS-BLK-PN-L', unit:'pcs', size:'l', active:true},
      {id:7, productName:'Socks', skuCode:'LNS-SKS-PN-L', unit:'pcs', size:'m', active:true}
    ]
  }

  productUnit():IPrdouctDetailList[]{
    return[
      {id:1, unit:'in', active:true},
      {id:2, unit:'kg', active:true},
      {id:3, unit:'lb', active:true},
      {id:4, unit:'mg', active:true},
      {id:5, unit:'pcs', active:true},
      {id:6, unit:'ft', active:true},
      {id:1, unit:'dz', active:true},
      {id:1, unit:'m', active:true}
    ]
  }

  productCategorie():IPrdouctDetailList[]{
    return [
      {id:1, productName:'T-shirt', active:true},
      {id:2, productName:'Jacket', active:true},
      {id:3, productName:'Trouser', active:true},
      {id:4, productName:'Jeans', active:true},
      {id:5, productName:'Shirt', active:true},
      {id:6, productName:'Pant', active:true},
      {id:7, productName:'Socks', active:true}
    ]
  }

  constructor() { }

}
