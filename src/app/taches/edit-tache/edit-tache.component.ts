import { Component, OnInit } from '@angular/core';
import { TachesServiceService } from '../taches-service.service';
import { ActivatedRoute } from '@angular/router';
import { Tache } from '../taches';

@Component({
  selector: 'app-edit-tache',
  standalone: false,
  templateUrl: './edit-tache.component.html',
  styleUrl: './edit-tache.component.css'
})
export class EditTacheComponent implements OnInit{

  tache: Tache;

  constructor(private tachesService: TachesServiceService,
   private router: ActivatedRoute
  ){};

  ngOnInit(): void {
    const idTache: string|any = this.router.snapshot.paramMap.get('id');

    this.tachesService.getOneTache(+idTache).subscribe(
      (reponse)=> this.tache= reponse
    )
  }

}
