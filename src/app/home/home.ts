import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  @ViewChild('aboutSection') aboutSection!: ElementRef;

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
