import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileMenuOpen = input<boolean>(false);
  toggleMenu = output<void>();

  constructor() {}

  protected onToggleMenu(): void {
    this.toggleMenu.emit();
  }
}
