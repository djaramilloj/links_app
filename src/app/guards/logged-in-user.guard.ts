import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId: number = parseInt(localStorage.getItem('userId'));
    const userToken: string = localStorage.getItem('userToken');
    if(!userId || !userToken) {
      this.router.navigateByUrl('/auth');
      return false;
    } else {
      return true;
    }
  }
  
}
