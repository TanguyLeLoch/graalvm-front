import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './components/user/user.component';
import {UserRoutingModule} from "./user-routing.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ],
  exports: [
    UserComponent
  ]
})
export class UserModule {
}
