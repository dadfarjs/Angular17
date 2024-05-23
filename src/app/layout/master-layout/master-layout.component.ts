import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { TopBarMenuComponent } from '../../alert-menu/topbar-menu.component';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrl: './master-layout.component.css',
  standalone: true,
  imports: [
    HomeComponent,
    TopBarMenuComponent,
    MatToolbarModule,
    FormsModule,
    RouterOutlet,
  ],
})
export class MasterLayoutComponent {
  user: any;
  @Input({ required: true })
  caption: string = 'Home Page';
  @Input()
  name = '';

  @Output()
  onCaptionClick: EventEmitter<string> = new EventEmitter();

  handleCaptionClick(event: string) {
    alert(`name is ${event}`);
    this.name = event;
    this.onCaptionClick.emit(event);
  }
}
