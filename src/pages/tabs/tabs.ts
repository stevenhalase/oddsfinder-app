import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { MatchesPage } from '../matches/matches';
import { DashboardPage } from '../dashboard/dashboard';
import { TopLeaguesPage } from '../top-leagues/top-leagues';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = MatchesPage;
  tab3Root = TopLeaguesPage;
  tab4Root = SettingsPage;

  constructor() {

  }
}
