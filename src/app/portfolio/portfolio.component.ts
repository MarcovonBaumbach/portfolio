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

  openPokedex() {
    window.open(
      'https://marco-von-baumbach.developerakademie.net/pokedex',
      '_blank'
    );
  }

  githubPokedex() {
    window.open(
      'https://github.com/MarcovonBaumbach/pokedex',
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
