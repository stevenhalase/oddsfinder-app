import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { MatchProvider } from '../../providers/match/match';
import { ModalController } from 'ionic-angular';
import { MatchPage } from '../match/match';

@IonicPage()
@Component({
  selector: 'page-league',
  templateUrl: 'league.html',
})
export class LeaguePage {

  public league: any;
  public matches: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public matchProvider: MatchProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.league = this.navParams.get('league');
    this.matchProvider.getMatchesByLeague(this.league)
      .then(matches => {
        this.matches = matches;
      })
      .catch(err => {
        console.log(err);
      })
  }

  matchSelected(match) {
    let modal = this.modalCtrl.create(MatchPage, { match: match, matches: this.matches });
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
