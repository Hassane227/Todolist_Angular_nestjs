import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Tache } from './taches';

@Injectable({
  providedIn: 'root'
})
export class TachesServiceService {
private ApiUrl = 'http://localhost:3000/taches'

  constructor(private http: HttpClient) { }

  getAllTaches(): Observable<Tache[]>{

    return this.http.get<Tache[]>(this.ApiUrl).pipe(
      tap((taches)=> console.table(taches)),
      catchError(
        (error)=>{
          console.log('une erreur est survenue lors de la recuperation de la taches'+error);
          return of([])
        }
      )
    )
  }

  addTaches(tache: Tache, personneId: number): Observable<Tache | null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Tache>(`${this.ApiUrl}/personne/${personneId}`, tache, httpOptions).pipe(
      tap((tache) => console.log('Tâche ajoutée avec succès:', tache)),
      catchError((err) => {
        console.error('Erreur lors de l\'ajout de la tâche:', err);
        return of(null);
      })
    );
}


}
