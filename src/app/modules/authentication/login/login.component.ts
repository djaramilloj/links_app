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
  public failedLogin: boolean = false;
  public errorMessage: string | null = null;

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
      const userId: number = parseInt(localStorage.getItem('userId'));
      if (!userId) {
        this.errorMessage = 'User not registered';
        throw new Error('User not registered');
      }
      if (userInput.email && userInput.password) {
        const response: {token: string} = await this.authenticationService.loginUser(userInput);
        if (response?.token) {
          localStorage.setItem('userToken', response.token);
          this.loading = false;
          this.router.navigate(['/']);
        }
      } else {
        throw new Error('Incomplete data to login user');
      }
    } catch (error) {
      this.loading = false;
      this.failedLogin = true;
      setTimeout(() => {
        this.failedLogin = false;
      }, 5000);
    }
  }

}
