import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { UserLogin } from "./login";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

const API_URL = environment.API_URL;

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}
  logout(): void {
    this.resetSecurityObject();
  }
  forgetPassword(model: UserLogin): Observable<any> {
    return this.http.post<any>(API_URL + "Account/ForgetPassword", model);
  }

  resetSecurityObject(): void {
    localStorage.removeItem("bearerToken");
  }
  loginUser(userCrednetial: UserLogin): Observable<any> {
    // Initialize security object
    return this.http
      .post<any>(API_URL + "Account/LoginUser", userCrednetial)
      .pipe(
        tap(resp => {
          // Use object assign to update the current object
          // NOTE: Don't create a new AppUserAuth object
          // ! because that destroys all references to object
          // Store into local storage
        })
      );
  }
}
