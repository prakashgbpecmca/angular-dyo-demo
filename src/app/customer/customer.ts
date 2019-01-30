import { ITimezone, IAddress } from '../user/user';

export interface ICustomerGrid {
  UserId: number;
  AccountNo: string;
  Email: string;
  TelephoneNo: string;
  CompanyName: string;
  Telephone: string;
  Country: string;
  ContactName: string;
  SalesReprestative: string;
}
export interface IInitials {
  Countries: any[];
  CountryPostCodes: any[];
  Roles: any[];
  Timezones: any[];
}
export interface ICustomerAssociatedUser {
  UserId: number;
  AssociateType: string;
  ContactName: string;
  Email: string;
  TelephoneNo: string;
  CompanyName: string;
  Role: string;
  RoleDisplay: string;
}
export interface ICustomer {
  UserId: number;
  RoleId: number;
  CompanyName: string;
  ContactFirstName: string;
  ContactLastName: string;
  Email: string;
  PhoneNumber: string;
  TelephoneNo: string;
  MobileNo: string;
  FaxNumber: string;
  Timezone: ITimezone;
  ShortName: string;
  Position: string;
  Skype: string;
  IsActive: boolean;
  CreatedOnUtc: Date;
  CreatedBy: number;
  UpdatedBy: number;
  ProfileImage: string;
  Address: IAddress;
  SalesCoOrdinatorUser: ICustomerAssociatedUser;
  MechandiseUser: ICustomerAssociatedUser;
  WarehouseUser: ICustomerAssociatedUser;
  SalesRepresentative: ICustomerAssociatedUser;
}
