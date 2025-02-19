import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-users',
  standalone: false,
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit{

  Users: Users[];
  constructor(private userServices: UsersService , 
    private router : Router

  ){};
  ngOnInit(): void {
    this.userServices.getAllUsers().subscribe(
      (user)=> this.Users= user
    )

      
  }

  gotoUserEdit(user: Users){

    
    this.router.navigate(['edit/user/', user.id])

  }


}
