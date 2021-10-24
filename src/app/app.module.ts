import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './league/league.component';
import { LeagueDetailsComponent } from './league-details/league-details.component';
import { TeamComponent } from './team/team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { FixturesDetailsComponent } from './fixtures-details/fixtures-details.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { LiveMatchComponent } from './live-match/live-match.component';
import { SportsComponent } from './sports/sports.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    LeagueDetailsComponent,
    TeamComponent,
    TeamDetailsComponent,
    FixturesComponent,
    FixturesDetailsComponent,
    HomeComponent,
    PagenotfoundComponent,
    PlayerDetailsComponent,
    LiveMatchComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
