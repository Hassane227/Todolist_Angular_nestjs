import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  private ApiUrl = 'http://localhost:3000/personnes'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Users[]>{

    return this.http.get<Users[]>(this.ApiUrl).pipe(
      tap((users)=> console.table(users)),
      catchError((error)=>{
        console.log('une erreu est survenue lors de la recuperation ',error);
        return of([]);
      })
    )

  }

  addUsers( user: Users):Observable<Users| null>{

    const httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

    return this.http.post<Users>(this.ApiUrl, user, httpOptions).pipe(
      tap((reponse)=> console.log(reponse)),
      catchError((erre)=>{ console.log('on a put ajouter l\'utilisateur'+erre);
        return of(null);

      })

    )

  } 

  
}
