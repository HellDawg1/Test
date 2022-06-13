import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import contactList from '../data.json';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';
interface Contacts {
  id: Number;
  name: String;
  job: String;
}

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contacts: Contacts[] = contactList;
  contact: any;
  contactId: any;
  messages = faMessage;
  phone = faPhone;
  menu = faEllipsis;
  search = faSearch;
  calendar = faCalendarCheck;
  facebook = faFacebookF;
  twitter = faTwitter;
  linked = faLinkedinIn;
  google = faGoogle;
  pin = faPinterestP;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.contactId = +params['id'];
      this.contact = this.contacts.find((x) => x.id == this.contactId);
    });
  }
}
