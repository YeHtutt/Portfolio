import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  

  constructor(private http: HttpClient) {}

  async sendEmail() {
    let nameInput = this.nameField.nativeElement; /*mit Ref #nameField Element(InputFeld) wird zugegriffen */
    let emailInput = this.emailField.nativeElement;
    let messageInput = this.messageField.nativeElement;

    let formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);

    await fetch('https://ye-htut-aung.developerakademie.net/portfolio/assets/send_email.php', {
      method:'POST',
      body: formData
    });
  }


}
