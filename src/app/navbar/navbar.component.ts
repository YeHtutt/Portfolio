import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  activeSection: string = '';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  /**
  * Lifecycle hook called after Angular has initialized all data-bound properties
  * of a directive. It is the perfect place to perform any initialization logic
  * for the component.
  */
  ngOnInit() {
    this.onWindowScroll();
  }

  /**
  * Lifecycle hook called after the component's view has been fully initialized.
  * This is a good place to perform any additional initialization logic related
  * to the view, such as accessing the DOM elements or performing calculations
  * based on the view.
  */
  ngAfterViewInit() {
    this.onWindowScroll(); //Call the method directly after initialisation
  }

  /**
  * Handles the 'scroll' event by updating the active section based on the scroll position.
  * Checks if required elements exist and calculates their positions relative to the viewport.
  */
  @HostListener('window:scroll')
  onWindowScroll() {
    if (this.checkIfElementsExist()) {
      const header = document.getElementById('header')!.getBoundingClientRect().top;
      const about = document.getElementById('about-me')!.getBoundingClientRect().top;
      const skills = document.getElementById('skills')!.getBoundingClientRect().top;
      const portfolio = document.getElementById('portfolio')!.getBoundingClientRect().top;
      const contact = document.getElementById('contact')!.getBoundingClientRect().top;

      if (header <= 0 && header > -164) this.activeSection = '';
      if (about < 250 && about > -506) this.activeSection = 'about';
      if (skills < 275 && skills > -520) this.activeSection = 'skills';
      if (portfolio < 100 && portfolio > -1600) this.activeSection = 'portfolio';
      if (contact < 300 && contact > 19) this.activeSection = 'contact';
    }
  }

  /**
  * Checks if the required elements exist in the DOM.
  *
  * @returns {boolean} - True if all required elements exist, otherwise false.
  */
  checkIfElementsExist() {
    const header = document.getElementById('header');
    const about = document.getElementById('about-me');
    const skills = document.getElementById('skills');
    const portfolio = document.getElementById('portfolio');
    const contact = document.getElementById('contact');
    if (header && about && skills && portfolio && contact) {
      return true;
    } else {
      return false;
    }
  }
}
