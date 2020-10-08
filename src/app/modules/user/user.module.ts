import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class UserModule { }
