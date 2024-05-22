import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'alert-menu',
  templateUrl: './alert-menu.component.html',
  styleUrl: './alert-menu.component.css',
  imports: [MatButtonModule, FormsModule, MatToolbarModule],
  standalone: true,
})
export class AlertMenuComponent {
  @Input({ required: true })
  caption: string = 'Home';
  @Input()
  name = '';
  handleClick(event: MouseEvent) {
    alert(`test ${this.name}, ${event.button}`);
  }

  @Output()
  onCaptionClick: EventEmitter<string> = new EventEmitter();

  handleCaptionClick() {
    this.onCaptionClick.emit(this.name);
  }
}
