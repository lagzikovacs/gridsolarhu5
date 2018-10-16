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

  public Fi = new Feliratkozas();

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

    this.markattintott = true;

    const url = 'https://docport.hu/ossrest/api/ugynok/webesajanlatkeres';
    // const url = 'http://localhost:52643/api/ugynok/webesajanlatkeres';
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    console.log(this.Fi);
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
