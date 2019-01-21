import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IInitials, ITrackUser, IUserGrid } from "./user";
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
    return this.http.post<any>(
      API_URL + "Account/RegisterUser",
      model
    );
  }
  getUserList(model: ITrackUser): Observable<IUserGrid[]> {
    return this.http.post<IUserGrid[]>(API_URL + "Account/GetUsers", model);
  }
  getUser(userId: any): Observable<any> {
    return this.http.get<any>(API_URL + "Account/GetUser", {
      params: {
        userId: userId
      }
    });
  }
  deleteUser(userId: any): Observable<any> {
    return this.http.get<any>(API_URL + "Account/DeleteUser", {
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
