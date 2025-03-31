import { CommonModule, getLocaleFirstDayOfWeek } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  buttonChecked = false
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
   console.log(this.buttonChecked);
  }

  checkFormular(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      console.log(this.contactData);
    }
  }
}
