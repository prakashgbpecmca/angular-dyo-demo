export class Rack {}


export interface IRackGrid {
  UserId: number;
  Name: string;
  Role: string;
  RoleDisplay: string;
  Email: string;
  Telephone: string;
  ManagerName: string;
  ManagerEmail: string;
}
export interface IInitials {
  Countries: any[];
  CountryPostCodes: any[];
  Roles: any[];
  Timezones: any[];
}

export interface IRackDetails {
  WareHouseId: number;
  BlockId: number;
  RackId: number;
  Rows: number;
  Sections: number;
 
}
export interface IWareHouse
{
  WareHouseId:Number,
  WareHouseName:string,
  WareHouseShortName:string
}
export interface IBlocks
{
  BlockId:Number,
  BlockName:string,
  WareHouseId:number
}
export interface IRacks
{
  RackId:Number,
  RackName:string,
  BlockId:Number
}
export interface IRacksInitials {
  WareHouses: any[];
  Blocks: any[];
  Racks: any[];
  
}
