import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: false,
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent  implements OnInit{
  

  @Input() user: Users

  constructor(private userService: UsersService, 
    private  router: Router
  ){};
  ngOnInit(): void {
    this.user = new Users();
      
  };

  onSubmit(){

    this.userService.addUsers(this.user).subscribe();
    this.router.navigate(['/Users']);


  }

}
