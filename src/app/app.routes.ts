import { Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./pages/home/home.routes').then((c) => c.routes),
  },
];
