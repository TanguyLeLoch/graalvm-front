import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user!: User | null;
  test!: string;

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginService.loggedIn$.subscribe(userLogged => {
      this.user = userLogged;
    });
  }

  getShorterAddress(address: string): string {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}`;
  }

  logout() {
    this.user = null;
    this.loginService.logout();
    this.router.navigateByUrl('');
  }
}
