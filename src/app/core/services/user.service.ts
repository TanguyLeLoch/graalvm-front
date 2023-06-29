import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AddPairRequest} from "../model/add-pair-request.model";
import {User} from "../model/user.model";
import {Pair} from "../model/pair.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  addPair(address: string, addPairRequest: AddPairRequest): Observable<User> {
    return this.http.post<User>(`http://localhost:8081/users/${address}/pair`, addPairRequest);
  }

  getUser(address: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8081/users/${address}`);
  }

  removePair(address: string, pair: Pair): Observable<User> {
    return this.http.delete<User>(`http://localhost:8081/users/${address}/pair/${pair.pairAddress}`)
  }
}
