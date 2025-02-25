import { Tache } from "../taches/taches";

export class Users {
    id: number;
    nom: string;
    prenom: string;
    Matricule: string;
    Email: string;
    age: number;
    tachesUser: Tache[];

    // ✅ Constructeur avec arguments par défaut
    constructor(
        nom: string = "",
        prenom: string = "",
        Matricule: string = "",
        Email: string = "",
        age: number = 0,
        tachesUser: Tache[] = []
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.Matricule = Matricule;
        this.Email = Email;
        this.age = age;
        this.tachesUser = tachesUser;
    }
}
