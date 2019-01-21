import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "./user.service";
import { jsonpCallbackContext } from "@angular/common/http/src/module";
import { Observable, of } from "rxjs";
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  map
} from "rxjs/operators";
import { FormGroup, NgForm } from "@angular/forms";
import { NgForOf, ViewportScroller } from "@angular/common";
import { IUser } from "./user";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-user-add-edit",
  templateUrl: "./user-add-edit.component.html",
  styleUrls: ["./user-add-edit.component.less"]
})
export class UserAddEditComponent implements OnInit {
  countryId = 0;
  type: string;
  UserId: number;
  code: string;
  phoneCode: "";
  setStateDisable = false;
  setZipDisable: false;
  emailExist: boolean;
  userInfo: any;
  userDetail: IUser;
  submitted = true;
  countries: any[];
  countryPhneCodes: any[];
  roles: any[];
  activeusers: any[];
  timezones: any[];
  constructor(
    private _activeModal: NgbActiveModal,
    private _userService: UserService,
    http: HttpClient
  ) {}

  newUser(): void {
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
      }
    };
  }
  getUserDetail(): void {
    this._userService.getUser(this.UserId).subscribe(
      data => {
        this.userDetail = data;
        for (let i = 0; i < this.countries.length; i++) {
          if (
            this.countries[i].CountryId ===
            this.userDetail.Address.Country.CountryId
          ) {
            this.countryId = this.countries[i].CountryId;
            break;
          }
        }
        this.setTelephoneCode();
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem("user"));
    this.newUser();
    this._userService.getUserInitials().subscribe(
      data => {
        this.countries = data.Countries;
        this.countryPhneCodes = data.CountryPostCodes;
        this.roles = data.Roles;
        this.timezones = data.Timezones;

        if (this.UserId) {
          this.getUserDetail();
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

  searchUsers (term: any) {
    if (term === "") {
      return of([]);
    }

    return this._userService.getActiveUsers(term).pipe(map(response => response));
  }

  onBlur(data: any): void {}
  emailValidation(email: string) {
    if (email) {
      this._userService.useremailValidation(email).subscribe(
        data => {
          this.emailExist = data.Status;
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  setTelephoneCode(): void {
    let obj = this.countryPhneCodes.find(
      p => p.CountryCode === this.userDetail.Address.Country.Code
    );
    if (obj) {
      this.code = obj.PhoneCode;
      this.phoneCode = obj.PhoneCode;
    }
  }

  SetCountryPhoneCodeIssue(country: any): void {
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].CountryId === country) {
        this.userDetail.Address.Country = this.countries[i];
        break;
      }
    }
    if (country && (country.Code === "HKG" || country.Code === "GBR")) {
      if (country.Code === "HKG") {
      }

      this.setStateDisable = true;
    }

    this.setTelephoneCode();
  }

  saveUser(userFrom: NgForm): void {
    console.log(userFrom);

    if (userFrom.valid) {
      console.log(this.userDetail);
      this._userService.saveUpdateUser(this.userDetail).subscribe(
        data => {
          status = data;
          this._activeModal.close();
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
