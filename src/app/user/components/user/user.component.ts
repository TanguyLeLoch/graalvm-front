import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../core/services/login.service";
import {User} from "../../../core/model/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user!: User
  JSON: JSON = JSON;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.user = this.loginService.user;
  }
}
