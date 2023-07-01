import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {Pair} from "../model/pair.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addPair(address: string, pairAddressRequest: { pairAddress: string }): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/users/${address}/pair`, pairAddressRequest);
  }

  getUser(address: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8081/users/${address}`);
  }

  removePair(address: string, pair: Pair): Observable<User> {
    return this.http.delete<User>(`http://localhost:8081/users/${address}/pair/${pair.pairAddress}`)
  }

  computePnl(address: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8081/users/${address}/pnl`, null)
  }
}
