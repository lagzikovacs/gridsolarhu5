import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Feliratkozas} from './feliratkozas';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-ajanlatkeres',
  templateUrl: './ajanlatkeres.component.html',
  styleUrls: ['./ajanlatkeres.component.css']
})

export class AjanlatkeresComponent implements OnInit {
  public ajanlatkeresKesz = false;

  /*   private Fi = new Feliratkozas("Lagzi-Kovács Sándor", "5100 Jászberény, Túzok u. 42.",
      "lks@gridsolar.hu", "0620 2575642", 0, 0); */
  public Fi = new Feliratkozas('', '', '', '', 0, 0);

  public hiba = false;
  public hibaUzenet = '';
  public markattintott = false;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if ((this.Fi.kompenzalando === 0 && this.Fi.nevleges === 0) ||
      (this.Fi.kompenzalando > 0 && this.Fi.nevleges > 0)) {
      this.hibaUzenet = 'Kérjük, hogy vagy a \'Kompenzálandó fogyasztás, kWh\' vagy a \'A napelemek teljesítménye, kW\' értékét adja meg!';
      this.hiba = true;
      return;
    }

    this.markattintott = true;

    const url = 'https://docport.hu/ossspa/api/feliratkozas/ajanlatkeresasync';
    // let url = 'http://localhost:5000/api/feliratkozas/ajanlatkeresasync';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    this.http.post(url, this.Fi, options)
      .toPromise()
      .then(res => {
        this.ajanlatkeresKesz = true;
      })
      .catch(error => {
        if (error.status !== 599) {
          this.hibaUzenet = error;
        } else {
          this.hibaUzenet = error.json();
        }
        this.hiba = true;
      });
  }

  chkInput(form, control): boolean {
    if (!control) {
      return false;
    }

    if (control.pristine && !form.submitted) {
      return false;
    }

    if (!control.errors) {
      return false;
    }

    return control.errors !== null;
  }
}
