import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MailData} from '../contact/contact.component';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<MailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MailData) { }

  ngOnInit(): void {
  }

  cancelMail() {
    this.data.complete = false;
  }
}
