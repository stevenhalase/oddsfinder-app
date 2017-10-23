import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SocialSharing } from '@ionic-native/social-sharing';

import { MatchesPage } from '../pages/matches/matches';
import { SettingsPage } from '../pages/settings/settings';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { TopLeaguesPage } from '../pages/top-leagues/top-leagues';
import { TabsPage } from '../pages/tabs/tabs';
import { MatchPage } from '../pages/match/match';
import { MatchDetailPage } from '../pages/match-detail/match-detail';
import { LeaguePage } from '../pages/league/league';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MatchProvider } from '../providers/match/match';

@NgModule({
  declarations: [
    MyApp,
    MatchesPage,
    SettingsPage,
    DashboardPage,
    TopLeaguesPage,
    TabsPage,
    MatchPage,
    MatchDetailPage,
    LeaguePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MatchesPage,
    SettingsPage,
    DashboardPage,
    TopLeaguesPage,
    TabsPage,
    MatchPage,
    MatchDetailPage,
    LeaguePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MatchProvider,
    SocialSharing
  ]
})
export class AppModule {}
