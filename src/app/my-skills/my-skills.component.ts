import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  constructor(private scroller: ViewportScroller) {}

  scrollToSection(param: string) {
    this.scroller.scrollToAnchor(param);
  }
}
