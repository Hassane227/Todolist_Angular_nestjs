import { Component, OnInit } from '@angular/core';
import { TachesServiceService } from '../taches-service.service';
import { Tache } from '../taches';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-taches',
  standalone: false,
  templateUrl: './list-taches.component.html',
  styleUrl: './list-taches.component.css'
})
export class ListTachesComponent implements OnInit{

  Taches: Tache[];

  constructor(private tachesServices: TachesServiceService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.tachesServices.getAllTaches().subscribe(
      (taches)=> this.Taches= taches
    )
      
  }

  goToEdite(Tache: Tache) {
    if (!Tache || !Tache.id_taches) {
      console.error("Erreur: L'ID de la tâche est invalide !", Tache);
      return; // Arrêter la navigation si l'ID est invalide
    }
  
    console.log("Navigation vers :", `/edit/tache/${Tache.id_taches}`);
    this.router.navigate([`/edit/tache/${Tache.id_taches}`]);
  }

  deletTache(id: number){
        this.tachesServices.deletTache(id).subscribe(
          (reponse)=>this.router.navigate(['/taches'])

        )
  }
  
  

}
