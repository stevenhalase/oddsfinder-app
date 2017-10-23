import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { ModalController } from 'ionic-angular';
import { MatchDetailPage } from '../match-detail/match-detail';

import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  public match: any;
  public matches: Array<any> = [];
  public regions: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    this.match = this.navParams.get('match');
    this.matches = this.navParams.get('matches');
    for (let matchInstance of this.match.MatchInstances) {
      let region = this.regions.find(el => {
        return el.name === matchInstance.Region;
      })
      if (typeof region === 'undefined') {
        this.regions.push({
          name: matchInstance.Region,
          matchInstances: [matchInstance]
        })
      } else {
        if (region.name === matchInstance.Region) {
          region.matchInstances.push(matchInstance);
        }
      }
    }
  }

  matchInstanceSelected(matchInstance) {
    let modal = this.modalCtrl.create(MatchDetailPage, { matchInstance: matchInstance });
    modal.present();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  share(matchInstance) {
    var options = {
      message: 'Check out these odds.', // not supported on some apps (Facebook, Instagram)
      subject: 'OddsFinder Odds', // fi. for email
      url: 'https://oddsfinder-app.herokuapp.com',
      chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
    }
    this.socialSharing.shareWithOptions(options)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
  }

}
