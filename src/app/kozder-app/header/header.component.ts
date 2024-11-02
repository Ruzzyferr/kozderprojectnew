import { Component, HostListener } from '@angular/core';
import {NgIf, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [
    NgIf,
    NgSwitchDefault
  ],
  standalone: true
})
export class HeaderComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Eğer tıklanan hedef dropdown'un içinde değilse kapat
    if (!target.closest('.dropdown')) {
      this.closeDropdown();
    }
  }
}
