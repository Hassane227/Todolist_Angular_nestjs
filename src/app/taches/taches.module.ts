import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTachesComponent } from './add-taches/add-taches.component';
import { FormsModule } from '@angular/forms';
import { EditTacheComponent } from './edit-tache/edit-tache.component';
import { AjoutertacheComponent } from './ajoutertache/ajoutertache.component';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';



@NgModule({
  declarations: [
    AddTachesComponent,
    EditTacheComponent,
    AjoutertacheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ],
    providers: [UsersService]
})
export class TachesModule { }
