import { IAddress } from "../user/user";

export interface IProfile {
  Name: string;
  Email: string;
  CompanyName: string;
  Address: IAddress;
  Telephone: string;
  imageUrl: string;
  Credentials: ICredentials;
}

export interface ICredentials {
  UserName: string;
  Password: string;
  ConfirmPassword: string;
}
