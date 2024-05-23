import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatButtonModule],
})
export class HomeComponent {
  router: Router = inject(Router);
  handleNavigateTodo() {
    this.router.navigate(['todo'], {
      queryParams: {
        id: 1,
      },
    });
  }
}
