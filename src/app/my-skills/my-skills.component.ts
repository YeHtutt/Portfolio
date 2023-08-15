import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  scrollToSection() {
    let contactSection = document.getElementById('contact-box');
    if(contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
}
