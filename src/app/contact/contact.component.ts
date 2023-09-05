import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendbutton') sendbutton!: ElementRef;


  requiredAlertName = false;
  requiredAlertEmail = false;
  requiredAlertMessage = false;

  greenCheckMarkName = false;
  greenCheckMarkEmail = false;
  greenCheckMarkMessage = false;

  emailSent = false;
  showSpanMsg = false;
  addClassToButton = false;

  target!: HTMLInputElement;


  constructor(private http: HttpClient) { }

  async sendEmail() {
    this.emailSent = true;
    setTimeout(() => {
      this.showSpanMsg = true;
      this.addClassToButton = true;
    }, 800);
    let nameInput = this.nameField.nativeElement;
    let emailInput = this.emailField.nativeElement;
    let messageInput = this.messageField.nativeElement;


    let formData = new FormData();
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);

    await fetch('https://ye-htut-aung.de/Portfolio/assets/send_email.php', {
      method: 'POST',
      body: formData
    });

    setTimeout(() => {
      // Reset the form fields and flags after successful email submission
      this.resetForm();
      this.greenCheckMarkName = false;
      this.greenCheckMarkEmail = false;
      this.greenCheckMarkMessage = false;
    }, 3000)

  }

  onBlur(event: Event) {
    this.target = event.target as HTMLInputElement;
    this.checkInputState();
  }

  checkInputState() {
    this.target.value.length > 0 ? this.changeInputFieldsGreen() : this.changeInputFieldsRed();
  }

  changeInputFieldsGreen() {
    this.target.classList.add("content-filled");
    this.target.classList.remove("empty-content");
    this.target.classList.remove("bg-warning");
  }

  changeInputFieldsRed() {
    this.target.classList.remove("content-filled");
    this.target.classList.add("empty-content");
    this.target.classList.add("bg-warning");
  }

  onInput(inputType: string) {
    this.checkInputState();
    this.checkInputValue(inputType);
    this.greenCheckMarked(inputType);
  }

  checkInputValue(inputType: string) {
    this.target.value.length > 0 ? this.showRequiredMessage(inputType) : this.hideRequiredMessage(inputType);
  }

  showRequiredMessage(inputType: string) {
    let htmlInputElement = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${htmlInputElement}`] = false;
  }

  hideRequiredMessage(inputType: string) {
    let htmlInputElement = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${htmlInputElement}`] = true;
  }

  greenCheckMarked(inputType: string) {
    let htmlInputElement = 'greenCheckMark' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${htmlInputElement}`] = this.target.value.length > 0;
  }

  onFocus(event: Event, inputType: string) {
    this.target = event.target as HTMLInputElement;

    if (this.target.value.length === 0) {
      this.target.classList.remove("bg-warning");
      this.showRequiredTextOnFocus(inputType);
    }
  }

  showRequiredTextOnFocus(inputType: string) {
    let htmlInputElement = 'requiredAlert' + inputType.charAt(0).toUpperCase() + inputType.slice(1);
    this[`${htmlInputElement}`] = true;
  }

  scrollToSection() {
    const top = document.getElementById('header');
    if (top) {
      top.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Reset the form fields and flags after successful email submission
  resetForm() {
    this.myForm.nativeElement.reset();
    this.emailSent = false;
    this.showSpanMsg = false;
    this.addClassToButton = false;
    this.nameField.nativeElement.classList.remove("content-filled");
    this.emailField.nativeElement.classList.remove("content-filled");
    this.messageField.nativeElement.classList.remove("content-filled");
  }

}
