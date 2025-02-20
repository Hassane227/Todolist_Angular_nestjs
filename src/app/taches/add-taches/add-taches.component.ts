import { Component, Input, OnInit } from '@angular/core';
import { Tache } from '../taches';
import { TachesServiceService } from '../taches-service.service';
import { tap } from 'rxjs';
import { UsersService } from '../../users/users.service';
import { Users } from '../../users/users';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-taches',
  standalone: false,
  templateUrl: './add-taches.component.html',
  styleUrl: './add-taches.component.css'
})
export class AddTachesComponent  implements OnInit{

  @Input() tache: Tache;

  user: Users[];

  isAddForm:  boolean;

  constructor(private tacheService: TachesServiceService , private userService : UsersService,
    private router: Router
  ){
  }
  ngOnInit(): void {

    this.isAddForm = this.router.url.includes('add');
    
      
  }
  onSubmit(){

    if(this.isAddForm){
    this.tacheService.addTaches(this.tache,1).subscribe(
       (reponse)=> this.router.navigate(['/taches'])
    )}
    else{
          this.tacheService.updateTache(this.tache).subscribe(
            (reponse)=> this.router.navigate(['/taches'])
          )
    }



  }
}
