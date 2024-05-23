import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'topbar-menu',
  templateUrl: './topbar-menu.component.html',
  styleUrl: './topbar-menu.component.css',
  imports: [MatToolbarModule],
  standalone: true,
})
export class TopBarMenuComponent {
  @Input({ required: true })
  name = '';
  @Input({ required: true })
  caption: string = 'Home';

  @Output()
  onCaptionClick: EventEmitter<string> = new EventEmitter();

  handleCaptionClick() {
    this.onCaptionClick.emit(this.name);
  }
}
