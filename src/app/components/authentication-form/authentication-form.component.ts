import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const REGEX_PASSOWRD: string = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,64}";

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.scss']
})

export class AuthenticationFormComponent implements OnInit {

  public loginForm: FormGroup;
  public signupForm: FormGroup;
  @Input() origin: 'login' | 'signup';
  @Input() loading: boolean;
  @Output() valueResponse: EventEmitter<any> = new EventEmitter();

  constructor( 
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildLoginForm();
  }

  logIn(event: any) {
    this.valueResponse.emit(this.loginForm.value);
    this.loginForm.reset();
  }

  signUp(event: any) {
    this.valueResponse.emit(this.signupForm.value);
    this.signupForm.reset();
  }

  navigateTerms() {
    window.open("https://www.linkedin.com/in/djaramilloj", "_blank");
  }

  private buildLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, Validators.pattern(REGEX_PASSOWRD)])]
    })

    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required, Validators.pattern(REGEX_PASSOWRD)])]
    })
  }

}
