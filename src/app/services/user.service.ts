import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //for now, I am just adding it here. Typically comes from the .env file
  URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  //getting the users from the server
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }
}
