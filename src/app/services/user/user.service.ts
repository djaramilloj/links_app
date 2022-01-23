import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// Model
import { UserAuth, UserInfo } from '../../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userAuthData: UserAuth;
  public userInfo: UserInfo;

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(userAuthData: UserAuth): Promise<any>{
    return this.http.get(`${environment.api_url}/user/${userAuthData.userId}`, {
      headers: {'Content-Type': 'application/json;', 'Token': userAuthData.token}
    }).toPromise();
  }
}
