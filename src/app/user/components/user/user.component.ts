import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/model/user.model";
import {UserService} from "../../../core/services/user.service";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../../core/services/login.service";
import {AddPairRequest} from "../../../core/model/add-pair-request.model";
import {tap} from "rxjs";
import {Pair} from "../../../core/model/pair.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!: User

  constructor(private userService: UserService, private http: HttpClient, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.user = this.loginService.user;
  }

  addPair(): void {
    const addPairRequest: AddPairRequest = {
      pairAddress: "0x1B58Cf9eEE32f475fc40582147eDDC6d06d778de",
    }
    this.userService.addPair(this.user.address, addPairRequest).pipe(
      tap(user => this.user = user)
    ).subscribe()
  }

  removePair(pair: Pair): void {
    this.userService.removePair(this.user.address, pair)
      .pipe(
        tap(user => this.user = user)
      ).subscribe()

  }
}
