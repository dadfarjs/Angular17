import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LocalStorageService } from './services/local-storage.service';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './pages/todo/todo.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    MasterLayoutComponent,
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
  user: any;
  localstorageService = inject(LocalStorageService);

  // constructor(private Is: LocalStorageService){}

  constructor() {
    this.handleGetUserData();
  }
  handleGetUserData() {
    const user = this.localstorageService.get('USER');
    if (Object.keys(user).length) {
      this.user = user;
    } else {
      alert('Login');
    }
    console.log(this.user);
  }
}
