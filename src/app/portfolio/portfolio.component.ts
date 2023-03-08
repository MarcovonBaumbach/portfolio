import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor() {}

  openJoin() {
    window.open(
      'https://www.marco-von-baumbach.developerakademie.net/join',
      '_blank'
    );
  }

  openElPolloLoco() {
    window.open(
      'https://www.marco-von-baumbach.developerakademie.net/elPolloLoco',
      '_blank'
    );
  }

  openRingOfFire() {
    window.open(
      'https://marco-von-baumbach.developerakademie.net/ringoffire',
      '_blank'
    );
  }

  githubRingOfFire() {
    window.open(
      'https://github.com/MarcovonBaumbach/ringoffire',
      '_blank'
    );
  }

  githubJoin() {
    window.open(
      'https://github.com/MarcovonBaumbach/Join',
      '_blank'
    );
  }

  githubElPolloLoco() {
    window.open(
      'https://github.com/MarcovonBaumbach/ElPolloLoco',
      '_blank'
    );
  }
}
