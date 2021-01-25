import { Component, OnInit } from '@angular/core';

export interface Popup {
  title: string;
  text: string;
 }



@Component({
  selector: 'app-covid-popup',
  templateUrl: './covid-popup.component.html',
  styleUrls: ['./covid-popup.component.scss']
})

export class CovidPopupComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
