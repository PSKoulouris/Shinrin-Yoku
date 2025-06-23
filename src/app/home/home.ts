import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact(): void {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  

  //form validation
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form submitted', this.formData);
    } else {
      form.control.markAllAsTouched();  // show validation errors
    }
  }
}




