import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserFormComponent } from './user-form/user-form.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  declarations: [
    ListUsersComponent,
    UserFormComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Ajoute FormsModule ici
  ]
})
export class UsersModule { }
