import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule {
}
