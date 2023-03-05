import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  constructor(private scroller: ViewportScroller) {
  }

  scrollToSection(param: string) {
    this.scroller.scrollToAnchor(param);
  }
}
