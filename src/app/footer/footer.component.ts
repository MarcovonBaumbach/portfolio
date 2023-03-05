import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImpressumComponent } from '../impressum/impressum.component';
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  constructor(private dialog: MatDialog) {
  }

  openDialog(param: string) {
    if(param == 'impressum'){
      this.dialog.open(ImpressumComponent);
    } else if(param == 'legal-notice'){
      this.dialog.open(LegalNoticeComponent, {
        height: '500px'
      });
    }
  }
}
