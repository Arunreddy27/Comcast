import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<User[]>{
   return this._http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
