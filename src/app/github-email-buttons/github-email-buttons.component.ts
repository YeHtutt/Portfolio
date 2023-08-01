import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-github-email-buttons',
  templateUrl: './github-email-buttons.component.html',
  styleUrls: ['./github-email-buttons.component.scss']
})
export class GithubEmailButtonsComponent {
  animationIsActive: boolean = true;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if(window.scrollY) {
      //console.log(window.scrollY);    
    }
      if(window.scrollY > 20) {
        this.animationIsActive =false;
      }else {
        this.animationIsActive = true;
      }
  }
}
