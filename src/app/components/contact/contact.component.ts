import { Component } from '@angular/core';
import { ReCaptchaV3Service } from 'ng-recaptcha';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  loading = false;
  reCaptchaSiteKey = '6LfTPHkpAAAAAFfwcEaHUohNmHwH4C672ZGRoOJI';

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {}

  sendEmail(e: Event) {
    e.preventDefault(); // Prevent the default form submission
    this.loading = true;

    // Verify reCAPTCHA
    this.recaptchaV3Service.execute(this.reCaptchaSiteKey).subscribe({
      next: (token: string) => {
        // reCAPTCHA token received, proceed with sending email
        const templateParams = {
          name: (document.getElementById('name') as HTMLInputElement).value,
          email: (document.getElementById('email') as HTMLInputElement).value,
          subject: (document.getElementById('subject') as HTMLInputElement).value,
          message: (document.getElementById('message') as HTMLTextAreaElement).value,
          reCaptchaToken: token
        };
    
        emailjs.send('service_e8ac38s', 'template_8ocyiuf', templateParams).then(
          (response: EmailJSResponseStatus) => {
            console.log('SUCCESS!', response);
            this.loading = false;
            (e.target as HTMLFormElement).reset();
            Swal.fire('Success!', 'Your message has been sent successfully.', 'success');
          },
          (error) => {
            console.log('FAILED...', error);
            this.loading = false;
            Swal.fire('Error!', 'Failed to send your message. Please try again later.', 'error');
          }
        );
      },
      error: (error: any) => {
        console.error('reCAPTCHA error:', error);
        // Handle reCAPTCHA error
        this.loading = false;
        Swal.fire('Error!', 'reCAPTCHA verification failed. Please try again.', 'error');
      }
    });
  }
  handleCaptchaResolved(token: string) {
    console.log('reCAPTCHA resolved:', token);
    // You can use the token here if needed
  }
}
