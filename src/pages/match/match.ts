import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  public match: any;
  public matches: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    this.match = this.navParams.get('match');
    this.matches = this.navParams.get('matches');
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
