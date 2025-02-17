import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../taches';
import { TachesServiceService } from '../taches-service.service';
import { tap } from 'rxjs';
import { UsersService } from '../../users/users.service';
import { Users } from '../../users/users';

@Component({
  selector: 'app-add-taches',
  standalone: false,
  templateUrl: './add-taches.component.html',
  styleUrl: './add-taches.component.css'
})
export class AddTachesComponent  implements OnInit{

  @Input() tache: Tache;

  user: Users[];

  constructor(private tacheService: TachesServiceService , private userService : UsersService){
  }
  ngOnInit(): void {
    
    this.userService.getAllUsers().subscribe((users)=> this.user= users);

      
  }
  onSubmit(){

    this.tacheService.addTaches(this.tache,1).subscribe(
    )



  }
}
