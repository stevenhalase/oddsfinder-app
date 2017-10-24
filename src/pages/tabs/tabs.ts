import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { MatchesPage } from '../matches/matches';
import { LoginPage } from '../login/login';
import { TopLeaguesPage } from '../top-leagues/top-leagues';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LoginPage;
  tab2Root = MatchesPage;
  tab3Root = TopLeaguesPage;
  // tab4Root = SettingsPage;

  constructor() {

  }
}
