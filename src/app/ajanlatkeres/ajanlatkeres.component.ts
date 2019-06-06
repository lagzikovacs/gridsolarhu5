import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Headers, RequestOptions} from '@angular/http';
import {AjanlatkeresPar} from './ajanlatkerespar';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-ajanlatkeres',
  templateUrl: './ajanlatkeres.component.html',
  styleUrls: ['./ajanlatkeres.component.css']
})

export class AjanlatkeresComponent implements OnInit {
  public ajanlatkeresKesz = false;

  public Fi = new AjanlatkeresPar();

  public hiba = false;
  public hibaUzenet = '';
  public markattintott = false;
  adatkszab = false;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  chkadatkszab() {
    this.adatkszab = !this.adatkszab;
  }

  submitForm(form: NgForm) {
    if (!form.valid) {
      return;
    }

    this.markattintott = true;

    const url = 'https://docport.hu/osscore/api/ajanlatkeres/webesajanlatkeres';
    // const url = 'http://localhost:52643/api/ugynok/webesajanlatkeres';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    this.Fi.PARTICIOKOD = 1;
    if ((this.Fi.UGYNOKNEV || '') === '') {
      this.Fi.UGYNOKNEV = 'gridsolar.hu';
    }

    this.http.post(url, this.Fi, options)
      .toPromise()
      .then(res => {
        this.ajanlatkeresKesz = true;
      })
      .catch(error => {
        this.hibaUzenet = error;
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
