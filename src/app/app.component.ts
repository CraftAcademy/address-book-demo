import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contacts: any;

  constructor(private http: Http) {
    this.getContacts().subscribe(data => {
      console.log(data);
      this.contacts = data.contacts;
    });
  }

  getContacts() {
    return this.http.get('http://ca-address-book.herokuapp.com/api/contacts')
      .map((res: Response) => res.json());
  }
}
