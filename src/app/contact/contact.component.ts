import { ViewportScroller } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  constructor(public dialog: MatDialog, 
    private scroller: ViewportScroller) {
  }

  scrollToSection(param: string) {
    this.scroller.scrollToAnchor(param);
  }

  sendMail() {
    this.formDisabled();
    this.sendToServer();
    this.openDialog();
    this.formEnabled();
    this.formCleared();
  }

  openDialog() {
    this.dialog.open(SuccessDialogComponent,  { 
      height: '300px', 
      width: '450px'
      });
  }

  async sendToServer() {
    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);

    await fetch('https://marco-von-baumbach.developerakademie.net/send_mail_portfolio/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );
  }

  formDisabled() {
    this.emailField.nativeElement.disabled = true;
    this.nameField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButton.nativeElement.disabled = true;
  }

  formEnabled() {
    this.emailField.nativeElement.disabled = false;
    this.nameField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButton.nativeElement.disabled = false;
  }

  formCleared() {
    this.emailField.nativeElement.value = '';
    this.nameField.nativeElement.value = '';
    this.messageField.nativeElement.value = '';
  }
}
