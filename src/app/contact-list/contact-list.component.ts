import { Component, OnInit } from '@angular/core';
import contactList from '../data.json';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
interface Contacts {
  id: Number;
  name: String;
  job: String;
  image: String;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  messages = faMessage;
  phone = faPhone;
  menu = faEllipsis;
  search = faSearch;
  bars = faBars;
  right = faArrowRight;
  left = faArrowLeft;
  constructor() {}

  ngOnInit(): void {}
  contacts: Contacts[] = contactList;

  welcome = (contact: any) => {
    console.log(contact);
  };
}
