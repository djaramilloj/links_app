import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
// Models
import { Login } from '../../../models/Authentication.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public origin: string;
  public loading: boolean = false;

  constructor(
    private router: Router,
    // Services
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.origin = 'login';
  }

  navigateSignup() {
    this.router.navigate(['/auth/signup']);
  }

  async loginUser(userInput: Login) {
    this.loading = true;
    try {
      if (userInput.email && userInput.password) {
        const response: {token: string} = await this.authenticationService.loginUser(userInput);
        if (response?.token) {
          localStorage.setItem('userToken', response.token);
          this.loading = false;
          // Navigate Home
        }
      } else {
        throw new Error('Incomplete data to login user');
      }
    } catch (error) {
      this.loading = false;
      console.log(error)
    }
  }

}
