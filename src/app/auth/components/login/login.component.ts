import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  ethAddressRegex !: RegExp;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.ethAddressRegex = /0x[a-zA-Z0-9]{40}/
    this.loginForm = this.formBuilder.group({
      address: [null, [Validators.required, Validators.pattern(this.ethAddressRegex)]],
    }, {updateOn: 'blur'});
  }

  onLogin(): void {
    console.log("Login");
  }

}
