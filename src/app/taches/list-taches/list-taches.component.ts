import { Component, OnInit } from '@angular/core';
import { TachesServiceService } from '../taches-service.service';
import { Tache } from '../taches';

@Component({
  selector: 'app-list-taches',
  standalone: false,
  templateUrl: './list-taches.component.html',
  styleUrl: './list-taches.component.css'
})
export class ListTachesComponent implements OnInit{

  Taches: Tache[];

  constructor(private tachesServices: TachesServiceService){}

  ngOnInit(): void {
    this.tachesServices.getAllTaches().subscribe(
      (taches)=> this.Taches= taches
    )
      
  }

}
