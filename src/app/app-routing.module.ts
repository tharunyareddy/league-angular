import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixturesComponent } from './fixtures/fixtures.component';
import { HomeComponent } from './home/home.component';
import { LeagueComponent } from './league/league.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { SportsComponent } from './sports/sports.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'league',component:LeagueComponent},
  {path:'sports',component:SportsComponent},
  {path:'team',component:TeamComponent},
  {path:'team-details/:id',component:TeamDetailsComponent},
  {path:'fixtures',component:FixturesComponent},
  {path:'live-match',component:LiveMatchComponent},
  {path:'player-details/:id',component:PlayerDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
