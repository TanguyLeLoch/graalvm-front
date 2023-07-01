import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from "../../../core/model/user.model";
import {UserService} from "../../../core/services/user.service";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../../../core/services/login.service";
import {mergeMap, Observable, tap, timer} from "rxjs";
import {Pair} from "../../../core/model/pair.model";
import {faCheck, faTrash} from "@fortawesome/free-solid-svg-icons";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  protected readonly faTrash = faTrash;
  protected readonly faCheck = faCheck;

  @ViewChild('pairAddressInput', {static: false}) pairAddressInput!: ElementRef;


  user!: User
  pairAddress!: string;
  buttonClicked: boolean = false

  fiveSec$: Observable<number> = timer(300).pipe(
    tap(() => this.pairAddressInput.nativeElement.value = ''),
  )

  constructor(private userService: UserService, private http: HttpClient, private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.user = this.loginService.user;
  }

  removePair(pair: Pair): void {
    this.userService.removePair(this.user.address, pair)
      .pipe(
        tap(user => this.user = user)
      ).subscribe()

  }

  onSubmitForm(form: NgForm) {
    if (this.buttonClicked) {
      this.userService.addPair(this.user.address, form.value).pipe(
        tap(user => this.user = user),
        tap(() => this.buttonClicked = false),
        mergeMap(() => this.fiveSec$),
      ).subscribe()
      // this.pairAddressInput.nativeElement.value = ''
    } else {
      this.buttonClicked = true
      this.pairAddressInput.nativeElement.focus()
    }
  }

  computePnl() {
    this.userService.computePnl(this.user.address).pipe(
      tap(console.log)
    ).subscribe()
  }
}
