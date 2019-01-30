import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { IRackDetails,IRacks, IWareHouse, IBlocks,IRacksInitials } from "./rack";
import { Observable } from "rxjs";
const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

const API_URL = "http://localhost:56269/";
@Injectable({
  providedIn: 'root'
})
export class RackService {

  constructor(private http: HttpClient) { }
  getRacksInitials(): Observable<IRacksInitials> {
    return this.http.get<IRacksInitials>(API_URL + "Rack/Initials");
  };
  saveRackDetail(model: any): Observable<any> {
    return this.http.post<any>(
      API_URL + "Rack/SaveRackDetail",
      model
    );
  }
 
}
