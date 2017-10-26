import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooldalComponent } from './fooldal/fooldal.component';
import { AjanlatkeresComponent } from './ajanlatkeres/ajanlatkeres.component';
import { ReferenciakComponent } from './referenciak/referenciak.component';
import { KapcsolatComponent } from './kapcsolat/kapcsolat.component';
import { PalyazatComponent } from './palyazat/palyazat.component';

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
    MenuComponent,
    FooldalComponent,
    AjanlatkeresComponent,
    ReferenciakComponent,
    KapcsolatComponent,
    PalyazatComponent
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
