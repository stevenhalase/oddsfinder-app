import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatchProvider } from '../../providers/match/match';

import { ModalController } from 'ionic-angular';
import { MatchPage } from '../match/match';

@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html'
})
export class MatchesPage {

  public matches : Array<any> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public matchProvider: MatchProvider) {
    this.getMatches();
  }

  getMatches() {
    this.matchProvider.getMatches().then(matches => {
      matches.sort((a, b) => {
        return a.League < b.League;
      })
      this.matches = matches;
      console.log(matches)
    });
  }

  matchSelected(match) {
    let modal = this.modalCtrl.create(MatchPage, { match: match, matches: this.matches });
    modal.present();
  }

}
