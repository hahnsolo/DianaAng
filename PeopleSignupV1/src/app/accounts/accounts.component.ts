import { Component, OnInit } from '@angular/core';
import { Person} from '../person/person';
import {PersonService} from '../person.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  people = new Array<Person>();
  constructor(private PersonService:PersonService) { }

  ngOnInit() {
    this.getAllPersons();
  }

  getAllPersons(){
    this.PersonService.GetPeopleAPI().subscribe(
      data => this.people = data
    );
  }
 }

