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
  public displayedMatches : Array<any> = [];
  public matches : Array<any> = [];
  public infiniteCount: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public matchProvider: MatchProvider, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.league = this.navParams.get('league');
    this.matchProvider.getMatchesByLeague(this.league)
      .then(matches => {
        this.matches = matches;
        if (this.matches.length > 20) {
          this.infiniteCount += 20;
          this.displayedMatches = this.matches.slice(0,this.infiniteCount - 1);
        } else {
          this.infiniteCount += this.matches.length;
          this.displayedMatches = this.matches.slice(0,this.infiniteCount - 1);
        }
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

  doInfinite(infiniteScroll) {
    if (this.infiniteCount < this.matches.length) {
      setTimeout(() => {
        if (this.matches.length > this.infiniteCount + 20) {
          let nextPortion = this.matches.slice(this.infiniteCount, this.infiniteCount + 19);
          this.infiniteCount += 20;
          this.displayedMatches = this.displayedMatches.concat(nextPortion);
          infiniteScroll.complete();
        } else {
          let nextPortion = this.matches.slice(this.infiniteCount, this.matches.length - 1);
          this.infiniteCount = this.matches.length;
          this.displayedMatches = this.displayedMatches.concat(nextPortion);
          infiniteScroll.complete();
        }
      }, 500)
    } else {
      infiniteScroll.complete();
    }
  }

}
