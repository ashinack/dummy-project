import { Component } from '@angular/core';

@Component({
  selector: 'app-animated-page',
  templateUrl: './animated-page.component.html',
  styleUrls: ['./animated-page.component.css'],
})
export class AnimatedPageComponent {
  toggle = true;

  directionChange() {
    this.toggle = !this.toggle;
  }
}
