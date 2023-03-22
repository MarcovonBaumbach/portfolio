import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor() {}

  openProject(param: string) {
    window.open(
      `https://www.marco-von-baumbach.developerakademie.net/${param}`,
      '_blank'
    );
  }

  openGithub(param: string) {
    window.open(
      `https://github.com/MarcovonBaumbach/${param}`,
      '_blank'
    );
  }
}
