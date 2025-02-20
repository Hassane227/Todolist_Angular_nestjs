import { Users } from "../users/users";

export class Tache {
  id_taches: number;
  title: string;
  description: string;
  isDone: boolean;
  personneTacheid: Users;

  constructor(
    title: string = 'Nouvelle tâche',
    description: string = 'Description par défaut',
    isDone: boolean = false,
    personneTacheid: Users = new Users() // Assurez-vous que Users a un constructeur approprié
  ) {
    this.title = title;
    this.description = description;
    this.isDone = isDone;
    this.personneTacheid = personneTacheid;
  }
}
