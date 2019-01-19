import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IInitials } from "./user";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const API_URL = "http://localhost:56269/";
@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private http: HttpClient) {}

  useremailValidation(email: string): Observable<any> {
    return this.http.get<any>(API_URL + "Account/IsEmailExist", {
      params: {
        email: email
      }
    });
  }
  getUserInitials(): Observable<IInitials> {
    return this.http.get<IInitials>(API_URL + "Master/Initials");
  }
  saveUpdateUser(model: any): Observable<any> {
    return this.http.post<any>(API_URL + "Account/SaveUser", model, httpOptions);
  }
  getUserList(model: any): Observable<any[]> {
    return this.http.post<any>(API_URL + "/GetUsers", model);
  }
  getUser(id: any): Observable<any[]> {
    return this.http.get<any>(API_URL + "/GetUser");
  }
  deleteUser(id: any): Observable<any[]> {
    return this.http.get<any>(API_URL + "/DeleteUser");
  }
  getActiveUsers(term: any): Observable<any[]> {
    return this.http.get<any[]>(API_URL + "/User/ActiveUsers", {
      params: {
        term: term
      }
    });
  }
}
