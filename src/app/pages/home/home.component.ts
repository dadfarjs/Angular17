import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LocalStorageService } from '../../services/local-storage.service';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class HomeComponent {
  router: Router = inject(Router);
  localstorageService = inject(LocalStorageService);
  user: any;
  age: number = 0;

  @Input()
  name = '';

  handleCaptionClick(event: string) {
    alert(`name is ${event}`);
    this.name = event;
    this.handleSetUserData();
  }
  handleClick(event: MouseEvent) {
    alert(`test ${this.name}, ${event.button}`);
  }

  handleSetUserData() {
    this.localstorageService.set('USER', {
      name: this.name.toString(),
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

  handleNavigateTodo() {
    this.router.navigate(['todo'], {
      queryParams: {
        id: 1,
      },
    });
  }
}
