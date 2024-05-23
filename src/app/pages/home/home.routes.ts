import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TodoComponent } from '../todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'todo/:id',
    component: TodoComponent,
  },
];
