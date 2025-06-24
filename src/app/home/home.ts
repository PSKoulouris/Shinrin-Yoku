import { Component, ViewChild, ElementRef, inject, ChangeDetectorRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

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
  constructor(private http: HttpClient) {}

  formData = {
    name: '',
    email: '',
    message: ''
  };

  submissionSuccess = false;

  scrollToAbout(): void {
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToContact(): void {
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form submitted', this.formData);
      this.submissionSuccess = true;
      this.submitFeedback(this.formData).subscribe(
        (response) => {
          console.log(response);
          form.resetForm();
    
          setTimeout(() => {
            this.submissionSuccess = false;
          }, 5000);
        },
        (error) => {
          console.error(error);
        }
      )
    } else {
      // Mark all controls touched to trigger validation messages immediately
      form.form.markAllAsTouched();
      this.submissionSuccess = false;

      // Manually trigger change detection (important if OnPush is used)
      this.cdr.detectChanges();
    }
  }

  submitFeedback(contact: any): Observable<string> {
    const entry = new HttpParams({
      fromObject: {
        "form-name": "contact",
        ...contact,
      },
    });

    return this.submitForm(entry);
  }

  private submitForm(entry: HttpParams): Observable<string> {
    return this.http
      .post("/", entry.toString(), {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        responseType: "text",
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg = "";

    if (err.error instanceof ErrorEvent) {
      errMsg = `Client-side error: ${err.error.message}`;
    } else {
      errMsg = `Server-side error. Code: ${err.status}. Message: ${err.message}`;
    }

    return throwError(errMsg);
  }
}
