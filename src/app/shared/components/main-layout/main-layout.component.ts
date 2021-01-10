import { AuthService } from './../../../admin/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin', 'dashboard']);
    } else {
      this.router.navigate(['/admin', 'login']);
    }
  }

}
