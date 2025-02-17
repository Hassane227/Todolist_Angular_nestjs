import { Users } from "../users/users";

export class Tache {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  personneTacheid: Users;

  constructor(
    id: number = 1,
    title: string = 'Nouvelle tâche',
    description: string = 'Description par défaut',
    isDone: boolean = false,
    personneTacheid: Users = new Users() // Assurez-vous que Users a un constructeur approprié
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isDone = isDone;
    this.personneTacheid = personneTacheid;
  }
}
