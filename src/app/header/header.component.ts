import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
 
  scrollToSection() {
    let contactSection = document.getElementById('contact-box');
    if(contactSection) {
      contactSection.scrollIntoView({behavior: 'smooth'});
    }
  }
}
