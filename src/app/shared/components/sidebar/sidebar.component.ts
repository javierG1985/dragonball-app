import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  mobileMenuOpen = input<boolean>(false);
  toggleMenu = output<void>();
  closeMenu = output<void>();

  constructor() {}

  protected onToggleMenu(): void {
    this.toggleMenu.emit();
  }

  protected onCloseMenu(): void {
    this.closeMenu.emit();
  }
}
