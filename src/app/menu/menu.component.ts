import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private scroller: ViewportScroller) {
  }

  scrollToSection(param: string) {
    this.scroller.scrollToAnchor(param);
  }
}
