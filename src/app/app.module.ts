import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Headers } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AjanlatkeresComponent } from './ajanlatkeres/ajanlatkeres.component';
import { HibabejelentesComponent } from './hibabejelentes/hibabejelentes.component';
import { RolunkComponent } from './rolunk/rolunk.component';
import { ReferenciakComponent } from './referenciak/referenciak.component';
import { FogalomtarComponent } from './fogalomtar/fogalomtar.component';
import { GyikComponent } from './gyik/gyik.component';
import { EszkozokComponent } from './eszkozok/eszkozok.component';
import { PartnerekComponent } from './partnerek/partnerek.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';

export const routerSettings: Routes = [
  { path: 'fooldal', component: FooldalComponent },
  { path: 'ajanlatkeres', component: AjanlatkeresComponent },
  { path: 'referenciak', component: ReferenciakComponent },
  { path: 'kapcsolat', component: KapcsolatComponent },
  { path: '', component: FooldalComponent },
  { path: '**', component: FooldalComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooldalComponent,
    AjanlatkeresComponent,
    HibabejelentesComponent,
    RolunkComponent,
    ReferenciakComponent,
    FogalomtarComponent,
    GyikComponent,
    EszkozokComponent,
    PartnerekComponent,
    KapcsolatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routerSettings),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
