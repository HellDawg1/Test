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

  ngOnInit(): void {
    console.log(this.contacts)
  }
  contacts: Contacts[] = contactList;
  welcome = (contact: any) => {
    console.log(contact);
  };

  //This is a basic implementation of search using exact name as input
  /*More advanced search handling can be done by implementing a seperate
  search component. That component can recognise every keystroke and
  update the list in realtime. This will be done by sending every
  new text in textbox upon every keystroke to API which inturn will compare
  the text to the input*/
  searchName(name:any){
    console.log(name)
    //If the search bar is empty, default contacts list
    if (name === "")
    {
      this.contacts= contactList;
    }
    //Otherwise if search bar has exact name matching in the db, result will be shown
    else {
      const results = this.contacts.filter((obj) =>{
        return obj.name === name
      })
      console.log("refreshed list", results)
      this.contacts = results
    }
  }
}
