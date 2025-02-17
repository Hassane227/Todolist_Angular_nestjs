import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { AddUsersComponent } from './add-users/add-users.component';



@NgModule({
  declarations: [
    UserFormComponent,
    AddUsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class UsersModule { }
