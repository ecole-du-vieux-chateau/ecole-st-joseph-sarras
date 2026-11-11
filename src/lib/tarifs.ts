// Tarifs de scolarité : bascule automatique au 1er janvier 2027.
export const TARIFS_SWITCH_DATE = new Date("2027-01-01T00:00:00+01:00");

export interface Tarifs {
  scolarite: string;
  tps: string;
  deuxEnfants: string;
  troisEnfants: string;
  quatreEnfants: string;
}

const TARIFS_AVANT: Tarifs = {
  scolarite: "42 €",
  tps: "21 €",
  deuxEnfants: "80 €",
  troisEnfants: "117 €",
  quatreEnfants: "152 €",
};

const TARIFS_APRES: Tarifs = {
  scolarite: "43 €",
  tps: "21,50 €",
  deuxEnfants: "82 €",
  troisEnfants: "120 €",
  quatreEnfants: "156 €",
};

export function getTarifs(now: Date = new Date()): Tarifs {
  return now >= TARIFS_SWITCH_DATE ? TARIFS_APRES : TARIFS_AVANT;
}
