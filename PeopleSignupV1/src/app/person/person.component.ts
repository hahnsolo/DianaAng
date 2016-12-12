import {Component, OnInit} from '@angular/core';
import {PersonService} from '../person.service';
import {Person} from './person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit{
 
  // Stores all the users ( this will change once backend is designed wiwth a route for email) 
  people = new Array<Person>();
  person = new Person();
  // current signin state ( will sync to auth0 after backend )
  signedIn :boolean;

  constructor(private PersonService:PersonService,private router: Router ){}
  
  ngOnInit(){

    // checks for signin status updates 
    if(this.PersonService.logIn)
    {
       this.signedIn = true;
       this.person = this.PersonService.CurrentUser;
    }
    else
    {
      // if not signed in, gets all the users so that the form can check
      this.signedIn = false;
      this.GetAllPeople();   
   }
  }

//the form update submit 
editSubmit(p:Person){
    this.PutPerson(p);
    // route to the general page for now
    this.router.navigate(['/consultants'])


}
// Re-write custom method in service once final deicison on backend as been made
// for now this will work... 
  checkUser(email:string)
  {
    for (let person of this.people) 
    {
        if(email == person.EmailAddress)
        {   
          this.PersonService.logIn=true;
          this.PersonService.CurrentUser = person;
          this.signedIn = true;
          this.person = person;
        }
    }
  }
  
  GetAllPeople()
  {
    this.PersonService.GetPeopleAPI().subscribe
    (
      data => this.people = data,
      Error => console.log('log')
    );
  }

  PostPerson(Person:Person) 
  {

    this.PersonService.PostPerson(Person).subscribe();
  }

  PutPerson(Person:Person) 
  {
    this.PersonService.PutPerson(Person).subscribe(
    data =>this.person = data
    );
  }

  DeletePerson(Person:Person)
  {
    this.PersonService.DeletePerson(Person).subscribe();
  }

  GetPerson(id:string)
  {
     this.PersonService.GetPerson(id).subscribe();
  }
}

//manage the ngdesotry once we have a better idea of the function use cases