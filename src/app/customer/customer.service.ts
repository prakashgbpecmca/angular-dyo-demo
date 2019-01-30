import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ITrackUser } from "../user/user";
import { ICustomerGrid, ICustomer } from './customer';
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const API_URL = "http://localhost:56269/";
@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private http: HttpClient) {}
  saveUpdateCustomer(model: ICustomer): Observable<any> {
    return this.http.post<any>(
      API_URL + "Account/RegisterUser", model );
  }
  GetCustomers(model: ITrackUser): Observable<ICustomerGrid[]> {
    return this.http.post<ICustomerGrid[]>(API_URL + "Account/GetCustomers", model);
  }
  GetCustomer(userId: any): Observable<ICustomer> {
    return this.http.get<ICustomer>(API_URL + "Account/GetCustomer", {
      params: {
        userId: userId
      }
    });
  }
  getActiveUsers(term: any): Observable<any[]> {
    return this.http.get<any[]>(API_URL + "/User/GetActiveUsers", {
      params: {
        term: term
      }
    });
  }
}
