import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MatchProvider } from '../../providers/match/match';

import { ModalController } from 'ionic-angular';
import { LeaguePage } from '../league/league';

@Component({
  selector: 'page-top-leagues',
  templateUrl: 'top-leagues.html'
})
export class TopLeaguesPage {

  topLeagues: Array<any> = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public matchProvider: MatchProvider) {

  }

  ionViewDidLoad() {
    this.getTopLeagues();
  }

  getTopLeagues() {
    this.matchProvider.getTopLeagues()
      .then(topLeagues => {
        this.topLeagues = topLeagues;
      })
      .catch(err => {
        console.log(err);
      })
  }

  openLeague(league) {
    let modal = this.modalCtrl.create(LeaguePage, { league: league });
    modal.present();
  }

}
