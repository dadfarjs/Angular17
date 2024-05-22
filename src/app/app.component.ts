import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AlertMenuComponent } from './alert-menu/alert-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from './services/local-storage.service';
import { TodoService } from './services/todo.service';
import { HttpClientModule } from '@angular/common/http';

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
  todoService: TodoService = inject(TodoService);
  todoList: any;

  // constructor(private Is: LocalStorageService){}

  constructor() {
    this.handleGetUserData();
    this.todoService.getTodoList().subscribe({
      next: (res: any) => {
        this.todoList = res;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {},
    }).unsubscribe;
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
