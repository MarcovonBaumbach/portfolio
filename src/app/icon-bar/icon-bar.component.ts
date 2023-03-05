import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.scss']
})
export class IconBarComponent {
  // intervalID: any;
  // intervalArrowID: any;
  constructor(private scroller: ViewportScroller) {
  }

  scrollToSection(param: string) {
    this.scroller.scrollToAnchor(param);
  }

  // scrollDown() {
  //   this.intervalID = setInterval(() => {
  //     window.scrollBy({
  //       top: 100,
  //       behavior: 'smooth'
  //     });
  //   }, 50);
  // }

  // stopScroll() {
  //   clearInterval(this.intervalID);
  // }

  // scrollDownArrow() {
  //   this.intervalArrowID = setInterval(() => {
  //     window.scrollBy({
  //       top: 100,
  //       behavior: 'smooth'
  //     });
  //   }, 50);
  // }

  // stopScrollArrow() {
  //   clearInterval(this.intervalArrowID);
  // }

}
