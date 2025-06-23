import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  constructor(private router: Router) {}

  scrollToSection(sectionId: string): void {
    if (this.router.url !== '/') {
      this.router.navigateByUrl('/').then(() => {
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); // slight delay to ensure DOM is rendered
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  scrollToAbout(): void {
    this.scrollToSection('about');
  }

  scrollToContact(): void {
    this.scrollToSection('contactUs');
  }


}
