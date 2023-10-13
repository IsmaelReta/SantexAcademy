import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { LoginData } from '../interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:4001/api/auth"

  constructor(private http: HttpClient) { }

  login(data:LoginData) {
    return this.http.post<User>(this.url, data);
  }



  
  

  
}
