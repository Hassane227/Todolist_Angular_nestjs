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

  addUsers( user: Users):Observable<Users | any>{

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

  getOneUser(id: number):Observable<Users | undefined>{

    return this.http.get<Users>(`${this.ApiUrl}/${id}`).pipe(
      tap((reponse)=>console.log(reponse)),
      catchError((err)=>{
        console.log('on a pas put recuperer le user'+ err);
        return of(undefined)
      })
    ) 
  }

  UpdateUSer( user: Users): Observable<Users|any>{

    const httpOptions={
      headers: new HttpHeaders({'content-type': 'application/json'})
    }

    return this.http.put(`${this.ApiUrl}/${user.id}`,user, httpOptions).pipe(
      tap((reponse)=>console.log(reponse)),
      catchError((err)=>{
        console.log(('une erreur se produit'+err));
        return of(null);
      })


      )
    

  }

delete(id: number): Observable<any>{

  return this.http.delete(`${this.ApiUrl}/${id}`).pipe(
    tap((reponse)=> console.log(reponse)),
    catchError((err)=>{
      console.log('on n\'a pas put supprimer : '+err);
      return of(null);
    })
  )

}
  
}
