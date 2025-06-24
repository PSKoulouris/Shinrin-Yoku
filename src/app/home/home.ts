import { Component, ViewChild, ElementRef, inject, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  // Optional: changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }



  }
