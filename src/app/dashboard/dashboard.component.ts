import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  showFiller = false;

  constructor(private router: Router) {}

  logout() {
    console.log('hello');

    this.router.navigateByUrl('login');
  }
}
