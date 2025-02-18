import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListTachesComponent } from './taches/list-taches/list-taches.component';
import { AddTachesComponent } from './taches/add-taches/add-taches.component';
import { AjoutertacheComponent } from './taches/ajoutertache/ajoutertache.component';
import { UserFormComponent } from './users/user-form/user-form.component';

const routes: Routes = [
  {path: '' , redirectTo:'Users', pathMatch:'full'},// pour la liste par defaut on laisse le path vide et mettre une redirectionTo ='le chemin' 

  { path: 'Users' , component: ListUsersComponent},
  {path: 'add/user' , component: UserFormComponent},
  {path:'taches', component: ListTachesComponent},
  {path:'add/taches', component: AjoutertacheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
