import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
  standalone: true,
  imports: [MatButtonModule],
})
export class TodoComponent {
  todoService: TodoService = inject(TodoService);
  todoList: any;

  router: Router = inject(Router);

  constructor() {
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

  handleNavigateHome() {
    this.router.navigate(['']);
  }
}
