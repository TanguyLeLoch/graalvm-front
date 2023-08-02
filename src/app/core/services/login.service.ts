import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../model/user.model";
import {LocalStorageService} from "./local-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInSubject = new BehaviorSubject<User | null>(null);
  loggedIn$ = this.loggedInSubject.asObservable();
  user!: User | null;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
  }


  login(address: string): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/users/${address}`, {}).pipe(
      tap(user => {
          this.setLoggedIn(user);
          this.user = user;
          this.localStorageService.setItem("userAddress", address);
        }
      ));
  }

  setLoggedIn(user: User): void {
    this.loggedInSubject.next(user);
  }

  logout() {
    this.loggedInSubject.next(null);
    this.user = null;
    this.localStorageService.removeItem("userAddress");
  }
}
