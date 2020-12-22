import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {CovidPopupComponent} from './covid-popup/covid-popup.component';
import {MatMenuTrigger} from '@angular/material/menu';
import {trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private covidDialog: MatDialog) {
  }

  title = 'clawebsite';

  ngOnInit() {
    this.openDialog();
  }

  someMethod() {
    this.trigger.openMenu();
  }

  openDialog() {
    this.covidDialog.open(CovidPopupComponent);
  }


}

