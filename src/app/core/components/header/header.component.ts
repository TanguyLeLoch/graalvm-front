import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: User | null;
  test!: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.loggedIn$.subscribe(userLogged => {
      this.user = userLogged;
    });
  }

  getShorterAddress(address: string): string {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`;
  }

}
