import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CovidPopupComponent } from './covid-popup/covid-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { HistoireComponent } from './histoire/histoire.component';
import { ActiviteComponent } from './activite/activite.component';
import { MailComponent } from './mail/mail.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MembreComponent } from './membre/membre.component';

@NgModule({
  declarations: [
    AppComponent,
    CovidPopupComponent,
    HomeComponent,
    ContactComponent,
    HistoireComponent,
    ActiviteComponent,
    MailComponent,
    MembreComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        FormsModule,
        HttpClientModule,
        MatSnackBarModule,
    ],
  entryComponents: [
    MailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
