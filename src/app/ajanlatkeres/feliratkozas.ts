export class Feliratkozas {
  nev: string;
  cim: string;
  email: string;
  telefon: string;
  kompenzalando: number;
  nevleges: number;

  public constructor (nev: string, cim: string, email: string, telefon: string,
        kompenzalando: number, nevleges: number) {
    this.nev = nev;
    this.cim = cim;
    this.email = email;
    this.telefon = telefon;
    this.kompenzalando = kompenzalando;
    this.nevleges = nevleges;
  }
}
