import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
    // Services
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    this.router.navigate(['/auth']);
  }

}
