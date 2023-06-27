import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user!: User;

  constructor(private http: HttpClient) {
  }


  login(address: string): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/users/${address}`, {}).pipe(
      tap(user => {
          this.user = user;
        }
      ));
  }

  getUser(): User {
    return this.user;
  }
}
