import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private dataService: DataService, private router: Router) {}
  canActivate(): boolean {
    if (!this.dataService.isAdmin) {
      this.router.navigate(['./']);
      return false;
    }
    return true;
  }
}
