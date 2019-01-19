export class User {}

export interface IInitials {
  Countries: any[];
  CountryPostCodes: any[];
  Roles: any[];
  Timezones: any[];
}

export interface IUser {
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
  ProfileImage: string;
  Address: IAddress;
}

export interface IAddress {
  Id: number;
  UserId: number;
  Phone: string;
  Address: String;
  Address2: string;
  Area: string;
  City: string;
  State: string;
  PostCode: string;
  Country: ICountry;
}

export interface ICountry {
  CountryId: number;
  Name: string;
  Code: string;
  Code2: string;
  TimezoneId: number;
}
export interface ITimezone {
  TimezoneId: number;
  Name: string;
}
