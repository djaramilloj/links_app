import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
//Models
import { Signup, Login } from '../models/Authentication.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(input: Signup): Promise<any>{
    return this.http.post(`${environment.api_url}/register`, input).toPromise();
  }

  loginUser(input: Login): Promise<any>{
    return this.http.post(`${environment.api_url}/login`, input).toPromise();
  }
}
