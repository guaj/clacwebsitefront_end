import { Component, OnInit } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {CovidPopupComponent} from './covid-popup/covid-popup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private covidDialog: MatDialog) {
  }

  title = 'clawebsite';

  ngOnInit() {
    this.openDialog();
  }


  openDialog() {
    this.covidDialog.open(CovidPopupComponent);
  }


}

