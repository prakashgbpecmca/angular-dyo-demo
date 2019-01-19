import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UserLogin } from './login';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:5000/api/security/';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  logout(): void {
    this.resetSecurityObject();
  }

  resetSecurityObject(): void {
    localStorage.removeItem("bearerToken");
  }
  loginUser(user: UserLogin): Observable<any> {
    // Initialize security object
    return this.http.post<any>(API_URL + "login",
    user).pipe(
      tap(resp => {
        // Use object assign to update the current object
        // NOTE: Don't create a new AppUserAuth object
        // ! because that destroys all references to object
        // Store into local storage
      }));
  }
}