import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
})
export default class MainComponent implements OnInit {
  protected mobileMenuOpen = signal(false);
  protected profileMenuOpen = signal(false);
  constructor() {}

  ngOnInit() {}

   protected toggleMobileMenu(): void {
    this.mobileMenuOpen.update(value => !value);
  }

  protected toggleProfileMenu(): void {
    this.profileMenuOpen.update(value => !value);
  }
}
