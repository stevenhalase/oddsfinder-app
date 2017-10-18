import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { MatchesPage } from '../matches/matches';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = MatchesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
