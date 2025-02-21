import { Users } from "../users/users";

export class Tache {
  id_taches: number;
  title: string;
  description: string;
  isDone: boolean;
  personneTacheid?: Users // ✅ Devient optionnel
  constructor(
    title: string = 'Nouvelle tâche',
    description: string = 'Description par défaut',
    isDone: boolean = false,
    personneTacheid?: Users // ✅ Devient optionnel
  ) {
    this.title = title;
    this.description = description;
    this.isDone = isDone;
    this.personneTacheid = personneTacheid;
  }
}
