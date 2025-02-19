import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListTachesComponent } from './taches/list-taches/list-taches.component';
import { AddTachesComponent } from './taches/add-taches/add-taches.component';
import { AjoutertacheComponent } from './taches/ajoutertache/ajoutertache.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { combineLatest } from 'rxjs';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const routes: Routes = [
  {path:'edit/user/:id',component: EditUserComponent},

  { path: 'Users' , component: ListUsersComponent},
  {path: 'add/user' , component: UserFormComponent},
  {path:'taches', component: ListTachesComponent},
  {path:'add/taches', component: AjoutertacheComponent},
  {path: '' , redirectTo:'Users', pathMatch:'full'},// pour la liste par defaut on laisse le path vide et mettre une redirectionTo ='le chemin' 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
