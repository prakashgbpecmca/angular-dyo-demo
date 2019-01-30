import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { CustomerService } from "./customer.service";
import { ICustomer } from "./customer";
import { UserService } from "../user/user.service";

@Component({
  selector: "app-customer-add-edit",
  templateUrl: "./customer-add-edit.component.html",
  styleUrls: ["./customer-add-edit.component.less"]
})
export class CustomerAddEditComponent implements OnInit {
  countryId = 0;
  type: string;
  UserId: number;
  code: string;
  phoneCode: string;
  setStateDisable = false;
  setZipDisable: false;
  emailExist: boolean;
  userInfo: any;
  userDetail: ICustomer;
  submitted = true;
  countries: any[];
  countryPhneCodes: any[];
  roles: any[];
  activeusers: any[];
  timezones: any[];
  constructor(
    private _customerService: CustomerService,
    private _userService: UserService,
    private _ActiveModal: NgbActiveModal
  ) {}

  newCustomer(): void {
    this.userDetail = {
      UserId: 0,
      RoleId: 0,
      CompanyName: "",
      ContactFirstName: "",
      ContactLastName: "",
      Email: "",
      PhoneNumber: "",
      TelephoneNo: "",
      MobileNo: "",
      FaxNumber: "",
      Timezone: {
        TimezoneId: 0,
        Name: ""
      },
      ShortName: "",
      Position: "",
      Skype: "",
      IsActive: true,
      CreatedOnUtc: new Date(),
      CreatedBy: this.userInfo.UserId,
      UpdatedBy: this.userInfo.UserId,
      ProfileImage: "",
      Address: {
        Id: 0,
        UserId: 0,
        Phone: "",
        Address: "",
        Address2: "",
        Address3: "",
        Area: "",
        City: "",
        State: "",
        PostCode: "",
        Country: {
          CountryId: 0,
          Name: "",
          Code: "",
          Code2: "",
          TimezoneId: 0
        }
      },
      SalesRepresentative: {
        UserId: 0,
        AssociateType: "",
        ContactName: "",
        Email: "",
        TelephoneNo: "",
        CompanyName: "",
        Role: "",
        RoleDisplay: ""
      },
      SalesCoOrdinatorUser: {
        UserId: 0,
        AssociateType: "",
        ContactName: "",
        Email: "",
        TelephoneNo: "",
        CompanyName: "",
        Role: "",
        RoleDisplay: ""
      },
      MechandiseUser: {
        UserId: 0,
        AssociateType: "",
        ContactName: "",
        Email: "",
        TelephoneNo: "",
        CompanyName: "",
        Role: "",
        RoleDisplay: ""
      },
      WarehouseUser: {
        UserId: 0,
        AssociateType: "",
        ContactName: "",
        Email: "",
        TelephoneNo: "",
        CompanyName: "",
        Role: "",
        RoleDisplay: ""
      }
    };
  }

  getCustomerDetail(): void {
    this._customerService.GetCustomer(this.UserId).subscribe(
      data => {
        this.userDetail = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    this.newCustomer();
    this._userService.getUserInitials().subscribe(
      data => {
        this.countries = data.Countries;
        this.countryPhneCodes = data.CountryPostCodes;
        this.roles = data.Roles;
        this.timezones = data.Timezones;
        this.newCustomer();
        if (this.UserId) {
          this.getCustomerDetail();
        }
      },
      err => {
        console.log(err);
      }
    );

    this._userService.getActiveUsers(1).subscribe(
      data => {
        this.activeusers = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
