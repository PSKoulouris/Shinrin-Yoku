import { Component, ElementRef, ViewChild } from '@angular/core';
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

  //Hamburger menu Logic

  @ViewChild('menuPanel') menuPanel!: ElementRef;
  @ViewChild('hamburgerBtn') hamburgerBtn!: ElementRef;
  @ViewChild('crossBtn') crossBtn!: ElementRef;

  openMenu(): void {
    this.menuPanel.nativeElement.classList.remove('-translate-x-full');
    this.hamburgerBtn.nativeElement.classList.add('hidden');
    this.crossBtn.nativeElement.classList.remove('hidden');
  }

  closeMenu(): void {
    this.menuPanel.nativeElement.classList.add('-translate-x-full');
    this.crossBtn.nativeElement.classList.add('hidden');
    this.hamburgerBtn.nativeElement.classList.remove('hidden');
  }

  scrollToAbout(): void {
  this.scrollToSection('about');
}

scrollToContact(): void {
  this.scrollToSection('contact');
}
}
