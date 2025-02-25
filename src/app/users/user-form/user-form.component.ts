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
  

  @Input() user: Users;
  isAddform: boolean;

  constructor(private userService: UsersService, 
    private  router: Router
  ){};
  ngOnInit(): void {

    this.isAddform = this.router.url.includes('add');
    if (this.isAddform) {
      // Initialiser 'user' pour le formulaire d'ajout
      this.user = new Users();
    }
      
  };

  onSubmit(){
    
    if(this.isAddform){
      this.userService.addUsers(this.user).subscribe(
        (user : Users)=> this.router.navigate(['/Users'])

      );

    }else{
      this.userService.UpdateUSer(this.user).subscribe(
        (user : Users)=> this.router.navigate(['/Users'])

      )
    }



  }

}
