import { Component, OnInit } from '@angular/core';
import { Tache } from '../taches';

@Component({
  selector: 'app-ajoutertache',
  standalone: false,
  templateUrl: './ajoutertache.component.html',
  styleUrl: './ajoutertache.component.css'
})
export class AjoutertacheComponent implements OnInit {
 
 tache : Tache;
  ngOnInit(): void {
    this.tache = new Tache()
 }
}
