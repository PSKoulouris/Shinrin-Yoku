import { Component, ViewChild, ElementRef, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf],
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

  //Form submission

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submissionSuccess = false;
  
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted', this.formData);
      this.submissionSuccess = true;

      form.resetForm();

      setTimeout(() => {
        this.submissionSuccess = false;
      }, 5000);
    } else {
      // Mark all controls touched to trigger validation messages immediately
      form.form.markAllAsTouched();
      this.submissionSuccess = false;

      // Manually trigger change detection (important if OnPush is used)
      this.cdr.detectChanges();
    }
  }
}
