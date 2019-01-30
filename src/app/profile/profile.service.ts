import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IProfile } from "./profile";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  userProfileDetail(userId: any): Observable<IProfile> {
    return this.httpClient.get<IProfile>("url", {
      params: {
        userId: userId
      }
    });
  }
}
