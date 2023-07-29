import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { GithubEmailButtonsComponent } from './github-email-buttons/github-email-buttons.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioHeadComponent } from './portfolio-head/portfolio-head.component';
import { JoinComponent } from './join/join.component';
import { PolloLocoComponent } from './pollo-loco/pollo-loco.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    GithubEmailButtonsComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioHeadComponent,
    JoinComponent,
    PolloLocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
