import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccessUser } from './access-control-model';
const API_URL = 'http://localhost:56269/AccessControl/';
@Injectable({
  providedIn: 'root'
})

export class AccessControlService {

  constructor(private http:HttpClient) { }
  getAccessUser():Observable<IAccessUser[]>
  {
    return this.http.get<IAccessUser[]>(API_URL+"GetAllUser");
  }
}
