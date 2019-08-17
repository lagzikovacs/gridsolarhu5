import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AjanlatkeresPar} from './ajanlatkerespar';
import {EmptyResult} from './emptyresult';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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

  constructor(private http: HttpClient) {
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

    this.Fi.PARTICIOKOD = 1;
    if ((this.Fi.UGYNOKNEV || '') === '') {
      this.Fi.UGYNOKNEV = 'gridsolar.hu';
    }

    this.http.post<EmptyResult>(url, this.Fi, {headers: new HttpHeaders().set('Content-Type', 'application/json')})
      .toPromise()
      .then(res => {
        if (res.Error !== null) {
          throw res.Error;
        }

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
