import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = true;
  menuOpen = false;
  activeSection: string = 'hero'; // default active section

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.menuOpen) {
      this.menuOpen = false;
    }
  }

  // Detect scroll and set active section
  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['hero', 'experience', 'skills', 'projects', 'education', 'contact'];
    let currentSection = 'hero';

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 70 && rect.bottom > 70) {
          currentSection = sectionId;
        }
      }
    });

    this.activeSection = currentSection;
  }
}
