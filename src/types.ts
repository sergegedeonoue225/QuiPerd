export interface Statistiques {
  nombreJoueurs: number;
  nombreParties: number;
  gainsTotaux: number;
}

export interface ReclamationForm {
  email: string;
  idPartie: string;
  message: string;
}

export interface ConnexionForm {
  email: string;
  motDePasse: string;
}