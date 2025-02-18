import { Tache } from "../taches/taches";

export class Users {
    id: number;
    nom: string;
    prenom: string;
    Matricule: string;
    Email: string;
    age: number;
    tachesUser: Tache[];

    // ✅ Ajout du constructeur par défaut
    constructor() {
        this.nom = "";
        this.prenom = "";
        this.Matricule = "";
        this.Email = "";
        this.age = 0;
    }
}
