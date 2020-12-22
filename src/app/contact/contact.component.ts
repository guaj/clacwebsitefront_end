import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MailComponent} from '../mail/mail.component';
import {MailService} from './mail.service';
import {MatSnackBar} from '@angular/material/snack-bar';


export interface MailData {
  prenom: string;
  nom: string;
  email: string;
  phone: string;
  text: string;
  complete: boolean;
}

export class Request {
  text: string;
}



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  prenom: string;
  nom: string;
  email: string;
  phone: string;
  text: string;

  constructor(public dialog: MatDialog, public mailService: MailService,
              private snackBar: MatSnackBar) { }

  openDialog(): void {
    console.log('Dialog open');
    const dialogRef = this.dialog.open(MailComponent, {
      data: {
        prenom: this.prenom,
        nom: this.nom,
        email: this.email,
        phone: this.phone,
        text: this.text,
      }
    });

    dialogRef.afterClosed().subscribe(async result => {
      let request = new Request();
      request.text = this.configureMessage(
        result.prenom,
        result.nom,
        result.email,
        result.phone,
        result.text);
      (await this.mailService.sendMail(request)).subscribe(res => {
         this.snackBar.open('Message envoyé!');
       });
      request = null;
    });

  }

  ngOnInit(): void {
  }

  configureMessage(prenom, nom, email, phone, text): string {
    return '<p>Message envoyer par: ' + prenom + ' ' + nom
            + '<br> Numero de tel: ' + phone
            + '<br> Courriel: ' + email
            + '<br> Message: <br>' + text + '</p>';
  }

}
