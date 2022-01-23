import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// Models
import { LinkInput } from 'src/app/models/Link.model';
import { UserAuth } from 'src/app/models/User.model';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(
    private http: HttpClient
  ) { }

  listLinks(userAuthData: UserAuth): Promise<any>{
    return this.http.get(`${environment.api_url}/links`, {
      headers: {'Token': userAuthData.token},
      responseType: 'text'
    }).toPromise();
  }

  createLink(userAuthData: UserAuth, linkInput: LinkInput): Promise<any>{
    return this.http.post(`${environment.api_url}/links`, linkInput, {
      headers: {'Content-Type': 'application/json;', 'Token': userAuthData.token}
    }).toPromise();
  }

  deleteLink(userAuthData: UserAuth, linkId: number): Promise<any>{
    return this.http.delete(`${environment.api_url}/links/${linkId}`, {
      headers: {'Content-Type': 'application/json;', 'Token': userAuthData.token}
    }).toPromise();
  }
}
