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

  @Input() tache: Tache = { 
    id_taches: 0, 
    title: '', 
    description: '', 
    isDone: true,  // Assure-toi que isDone est bien initialisé
    personneTacheid: new Users()
  };  users: Users[];
  selectedUserId: number;

  isAddForm:  boolean;

  constructor(private tacheService: TachesServiceService , private userService : UsersService,
    private router: Router
  ){
  }
  ngOnInit(): void {

    this.isAddForm = this.router.url.includes('add');
      console.log("Valeur initiale de tache.isDone:", this.tache?.isDone);

      this.userService.getAllUsers().subscribe((reponse)=>this.users=reponse)
  
  
    
      
  }
  onSubmit(){

    if(this.isAddForm){
    this.tacheService.addTaches(this.tache,this.selectedUserId).subscribe(
       (reponse)=> this.router.navigate(['/taches'])
    )}
    else{
          this.tacheService.updateTache(this.tache).subscribe(
            (reponse)=> this.router.navigate(['/taches'])
          )
    }



  }
}
