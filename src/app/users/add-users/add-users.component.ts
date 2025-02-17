import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-add-users',
  standalone: false,
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css'
})
export class AddUsersComponent  implements OnInit{


  user: Users = new Users();
  ngOnInit(): void {

      
  }


}
