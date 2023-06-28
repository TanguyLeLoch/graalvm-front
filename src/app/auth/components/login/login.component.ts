import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../../core/services/login.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  ethAddressRegex !: RegExp;
  logged: boolean = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.ethAddressRegex = /0x[a-zA-Z0-9]{40}/
    this.loginForm = this.formBuilder.group({
      address: [null, [Validators.required, Validators.pattern(this.ethAddressRegex)]],
    });
  }

  onLogin(): void {
    this.loginService.login(this.loginForm.value.address).pipe(
      tap(() => this.router.navigateByUrl('user')),
      tap(() => this.logged = true)
    ).subscribe();
  }
}
