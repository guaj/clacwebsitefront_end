import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Request} from './contact.component';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }


  url = 'http://localhost:3000/mail';

   async sendMail(message) {
     return this.http.post<Request>(this.url, message);
   }

  }

