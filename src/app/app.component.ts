import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertMenuComponent } from './alert-menu/alert-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from './services/local-storage.service';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { TodoComponent } from './pages/todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AlertMenuComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    HttpClientModule,
    HomeComponent,
    TodoComponent,
  ],
  providers: [
    TodoService,
    // LocalStorageService,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Mostafa';
  age = 28;
  user: any;
  localstorageService = inject(LocalStorageService);

  // constructor(private Is: LocalStorageService){}

  constructor() {
    this.handleGetUserData();
  }

  handleCaptionClick(event: string) {
    alert(`name is ${event}`);
    this.title = event;
    this.handleSetUserData();
  }

  handleSetUserData() {
    this.localstorageService.set('USER', {
      name: this.title.toString(),
      age: this.age.toString(),
    });
  }
  handleGetUserData() {
    this.user = this.localstorageService.get('USER');
    console.log(this.user);
  }

  handleClear() {
    this.localstorageService.clear();
  }
}
