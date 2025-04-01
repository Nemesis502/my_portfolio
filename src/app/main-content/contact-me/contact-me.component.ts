import { CommonModule} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  buttonChecked = false;
  mailTest = false;
  http = inject(HttpClient)

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  checkButtonPolicy() {
    if (this.buttonChecked == false) {
      this.buttonChecked = true
    } else {
      this.buttonChecked = false
    }
  }

  post = {
    endPoint: 'https://bastianklawes.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  checkFormular(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }


}
