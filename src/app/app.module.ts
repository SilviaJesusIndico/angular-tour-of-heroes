import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { GraficoComponent } from './grafico/grafico.component';
import { LoginComponent } from './unlogged-area/login/login.component';
import { LoggedAreaComponent } from './logged-area/logged-area.component';
import { UnloggedAreaComponent } from './unlogged-area/unlogged-area.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    LoggedAreaComponent,
    UnloggedAreaComponent,
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    LoginComponent,
    GraficoComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
