
export interface IStore{
    id:number;
    productName:string;
    productPrice:number;
    description:string;
    IsActive:boolean;
}

export interface IDashboard{
    id:number;
    img:string;
    name:string;
    description:string;
    link:string;
    IsActive:boolean;
}

export interface IProductData{
    id:number;
    supplier:string;
    invoiceDate:string;
    responsible:string;
    currency:string;
    total:number;
    IsActive:boolean;
}

export interface IProductDataList{
    id:number;
    date:string;
    number:string;
    ref:string;
    partner:string;
    journal:string;
    total:number;
    status:string;
}

export interface IPrdouctDetailList{
id:number;
productName?:string;
skuCode?:string;
unit?:string;
size?:string;
socks?:string;
active:true;
}

export interface IAccessUser{
    UserId:number;
    Name:string;
    UserName:string;
   
    }