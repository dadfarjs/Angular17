import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertMenuComponent } from './alert-menu/alert-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AlertMenuComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mostafa';
  age = 28;

  handleCaptionClick(event: string) {
    alert(`name is ${event}`);
  }
}
