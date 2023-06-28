import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInSubject = new BehaviorSubject<User | null>(null);
  loggedIn$ = this.loggedInSubject.asObservable();
  user!: User;

  constructor(private http: HttpClient) {
  }


  login(address: string): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/users/${address}`, {}).pipe(
      tap(user => {
          this.setLoggedIn(user);
          this.user = user;
        }
      ));
  }

  setLoggedIn(user: User): void {
    this.loggedInSubject.next(user);
  }
}
