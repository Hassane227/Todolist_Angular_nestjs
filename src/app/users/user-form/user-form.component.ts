import { Component, Input } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Input() user: Users;// donc  notre composant peut prendre un pokemon en paramettre

  constructor(private userServie: UsersService , private router: Router){
  }

  onSubmit(){
    this.userServie.addUsers(this.user).subscribe()

  }

}
