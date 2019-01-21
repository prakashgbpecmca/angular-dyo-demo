import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:56269/AccessControl/';
@Injectable({
  providedIn: 'root'
})

export class AccessControlService {

  constructor(private http:HttpClient) { }  

  getAccessUserById(userId):Observable<any>
  {
    return this.http.get<any>(API_URL+"GetAllUser",{
      params: {
        userId: userId
       
      },

    });
  }
 assignModuleToUser(accessControlModule)
 {
   return this.http.post<any>(API_URL+"AssigneModule",accessControlModule)
 }
}
