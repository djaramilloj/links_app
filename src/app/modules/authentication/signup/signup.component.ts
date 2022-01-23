import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { Signup } from '../../../models/Authentication.model';
//Services
import { AuthenticationService } from '../../../services/authentication/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public origin: string;
  public loading: boolean = false;
  public successRegister: boolean = false;
  public failedRegister: boolean = false;
  
  constructor(
    private router: Router,
    // Services
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.origin = 'signup';
  }

  navigateLogin() {
    this.router.navigate(['/auth']);
  }

  async registerUser(userInput: Signup) {
    this.loading = true;
    try {
      if (userInput.name && userInput.email && userInput.password) {
        const response: {id: number} = await this.authenticationService.registerUser(userInput);
        if (response?.id) {
          localStorage.setItem('userId', response.id.toString());
          this.loading = false;
          this.successRegister = true;
          setTimeout(() => {
            this.successRegister = false;
            this.router.navigate(['/auth']);
          }, 2000);
        }
      } else {
        throw new Error('Incomplete data to register user');
      }
    } catch (error) {
      this.loading = false;
      this.failedRegister = true;
      setTimeout(() => {
        this.failedRegister = false;
      }, 4000);
    }
  }

}
