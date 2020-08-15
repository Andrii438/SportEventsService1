import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';
import { map, take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router) { }  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {  
      if (sessionStorage.getItem('authenticatedUser')) {  
          return true;  
      }  
      this._router.navigate(['']);  
      return false;  
  }  
}
