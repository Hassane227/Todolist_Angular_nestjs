import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { provideHttpClient } from '@angular/common/http';
import { BorderCardDirective } from './border-card.directive';
import { ListTachesComponent } from './taches/list-taches/list-taches.component';
import { FormsModule } from '@angular/forms';
import { TachesModule } from './taches/taches.module';
import { CommonModule } from '@angular/common';
import { Users } from './users/users';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    BorderCardDirective,
    ListTachesComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // ✅ Importer CommonModule pour *ngIf et autres directives    FormsModule,
    FormsModule, // Ajoute FormsModule ici
    TachesModule,
    UsersModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
