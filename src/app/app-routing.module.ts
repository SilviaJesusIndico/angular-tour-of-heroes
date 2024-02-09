import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GraficoComponent } from './logged-area/grafico/grafico.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoggedAreaComponent } from './logged-area/logged-area.component';

const routes: Routes = [
  {
    path: '',
    component: UnloggedAreaComponent,
    canActivate: [ UnloggedGuardService ],
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  { 
    path: '', 
    component: LoggedAreaComponent, 
    //redirectTo: '/login', pathMatch: 'full' },
    canActivate: [ LoggedGuardService ],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'detail/:id', component: HeroDetailComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'grafico', component: GraficoComponent }, 
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
