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

  submissionSuccess = false; // ✅ success flag

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form submitted', this.formData);
      this.submissionSuccess = true;

      // Optionally clear form:
      form.resetForm(); // resets both data + form state
      this.submissionSuccess = true;

      // Optional: hide message after a few seconds
      setTimeout(() => {
        this.submissionSuccess = false;
      }, 5000);
    } else {
      form.control.markAllAsTouched();
      this.submissionSuccess = false;
    }
  }
}
