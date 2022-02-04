import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AjanlatkeresComponent } from './ajanlatkeres/ajanlatkeres.component';
import { ReferenciakComponent } from './referenciak/referenciak.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { PalyazatComponent } from './palyazat/palyazat.component';
import {HttpClientModule} from '@angular/common/http';
import { HibabejelentesComponent } from './hibabejelentes/hibabejelentes.component';

export const routerSettings: Routes = [
  { path: 'fooldal', component: FooldalComponent },
  { path: 'ajanlatkeres', component: AjanlatkeresComponent },
  { path: 'referenciak', component: ReferenciakComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: 'palyazat', component: PalyazatComponent },
  { path: '', component: FooldalComponent },
  { path: '**', component: FooldalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooldalComponent,
    AjanlatkeresComponent,
    ReferenciakComponent,
    KapcsolatComponent,
    PalyazatComponent,
    HibabejelentesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routerSettings, { relativeLinkResolution: 'legacy' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
