import { Component } from '@angular/core';
import emailjs,{ EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  loading = false;
  public_key = 'T6CPf2_zdjm8Yjlwa';

  constructor() {}

  sendEmail(e: Event) {
    e.preventDefault(); // Prevent the default form submission
    this.loading = true;

    // Get the form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const subject = (document.getElementById('subject') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    // Prepare the email template parameters
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    // Send email using EmailJS
    emailjs.send('service_e8ac38s', 'template_8ocyiuf', templateParams, this.public_key)
    .then(
      (response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response);
        this.loading = false;
        const contactForm = document.getElementById('contactForm') as HTMLFormElement;
        if (contactForm) {
          contactForm.reset(); // Reset form
        }
        Swal.fire('Success!', 'Your message has been sent successfully.', 'success');
      },
      (error) => {
        console.log('FAILED...', error);
        this.loading = false;
        Swal.fire('Error!', 'Failed to send your message. Please try again later.', 'error');
      }
    )
    .catch((error) => {
      console.error('Error occurred while sending email:', error);
      this.loading = false;
      Swal.fire('Error!', 'An unexpected error occurred. Please try again later.', 'error');
    });
  }

  handleCaptchaResolved(event: any) {
    const token = event as string; // Extracting the token from the event object
    console.log('reCAPTCHA resolved:', token);
    // You can use the token here if needed
  }
}
