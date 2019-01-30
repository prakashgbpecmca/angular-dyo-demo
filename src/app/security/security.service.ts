import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { User } from "../user/user";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { UserLogin } from "../login/login";
import { environment } from "src/environments/environment";

const API_URL = environment.API_URL + "api/token";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded"
  })
};

function FormEncode(data: any) {
  const pairs: any[] = [];
  for (let key in data) {
    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
  }
  return pairs.join("&").replace("/%20/g", "+");
}
@Injectable({
  providedIn: "root"
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  oauthToken(user: UserLogin): Observable<any> {
    let userInfo = FormEncode({
      username: user.UserName,
      password: user.Password,
      grant_type: "password"
    });
    return this.http.post<any>(API_URL, userInfo, httpOptions);
  }
}
