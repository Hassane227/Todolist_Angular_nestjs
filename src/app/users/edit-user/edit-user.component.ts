import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: false,
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{

  userEdit: Users|undefined;

  constructor(private userService: UsersService,
    private router: ActivatedRoute
  ){
  }
  ngOnInit(): void {

    const userid : string|null= this.router.snapshot.paramMap.get('id');
    if(userid){
    this.userService.getOneUser(+userid).subscribe(
      (userServe)=> this.userEdit=userServe
    )}
    else{
      this.userEdit=undefined
    }



      
  }
}
