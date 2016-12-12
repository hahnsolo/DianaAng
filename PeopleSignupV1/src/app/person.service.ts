import {Injectable} from '@angular/core';
import {Person} from './person/person';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class PersonService {

CurrentUser:Person;
logIn:boolean;

  constructor(private http: Http) 
  {
  
  }


  GetPeopleAPI(): Observable<any> 
  {
  return this.http.get("http://localhost:3000/Person/")
  .map( (res: Response) =>res.json());
  }

  PostPerson(Person:Person) : Observable<any>
  {  
    return this.http.post("http://localhost:3000/Person",Person);
  }

  PutPerson(Person:Person) : Observable<any>
  {

    return this.http.put("http://localhost:3000/Person/"+Person.id,Person)
    .map (( res:Response) => res.json());
  }

  DeletePerson(Person:Person) :Observable<any>{

    return this.http.delete("http://localhost:3000/Person/"+Person.id);
  }

  GetPerson(id:string): Observable<any>
  {
     return this.http.get("http://localhost:3000/Person/"+id)
     .map(((res: Response) =>res.json()));
  }
}
