webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchDetailPage = (function () {
    function MatchDetailPage(navCtrl, navParams, viewCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.socialSharing = socialSharing;
    }
    MatchDetailPage.prototype.ionViewDidLoad = function () {
        this.matchInstance = this.navParams.get('matchInstance');
    };
    MatchDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MatchDetailPage.prototype.share = function (matchInstance) {
        var options = {
            message: 'Check out these odds.',
            subject: 'OddsFinder Odds',
            url: 'https://oddsfinder-app.herokuapp.com',
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        };
        this.socialSharing.shareWithOptions(options)
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return MatchDetailPage;
}());
MatchDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match-detail',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/match-detail/match-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center *ngIf="!matchInstance">Match</ion-title>\n    <ion-title text-center *ngIf="matchInstance">{{ matchInstance.Team1.Name }} vs {{ matchInstance.Team2.Name }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title item-start>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list *ngIf="matchInstance">\n    <!-- <ion-list-header>\n      <span class="psuedokey" item-end>{{ matchInstance.PsuedoKey }}</span>\n    </ion-list-header> -->\n    <div>\n      <ion-list-header class="match-league">\n        {{ matchInstance.Region }}\n      </ion-list-header>\n      <ion-item class="match-instance">\n        <img *ngIf="matchInstance.Service === \'Betway\'" src="../../assets/images/betway.png">\n        <img *ngIf="matchInstance.Service === \'MerryBet\'" src="../../assets/images/merrybet.png">\n        <img *ngIf="matchInstance.Service === \'PrincessBet\'" src="../../assets/images/princessbet.png">\n        <img *ngIf="matchInstance.Service === \'BetPawa\'" src="../../assets/images/betpawa.png">\n        <img *ngIf="matchInstance.Service === \'LovingBet\'" src="../../assets/images/lovingbet.png">\n        <div item-end>\n          <span (click)="share(matchInstance)" class="share">Share</span>\n          <span>{{ matchInstance.Team1.Price }}</span>\n          <span>{{ matchInstance.DrawPrice }}</span>\n          <span>{{ matchInstance.Team2.Price }}</span>\n        </div>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/match-detail/match-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
], MatchDetailPage);

//# sourceMappingURL=match-detail.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_match_match__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_match__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LeaguePage = (function () {
    function LeaguePage(navCtrl, navParams, viewCtrl, matchProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.matchProvider = matchProvider;
        this.modalCtrl = modalCtrl;
        this.displayedMatches = [];
        this.matches = [];
        this.infiniteCount = 0;
    }
    LeaguePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.league = this.navParams.get('league');
        this.matchProvider.getMatchesByLeague(this.league)
            .then(function (matches) {
            _this.matches = matches;
            _this.matches = _this.matches.sort(function (a, b) {
                return a.League.localeCompare(b.League);
            });
            if (_this.matches.length > 20) {
                _this.infiniteCount += 20;
                _this.displayedMatches = _this.matches.slice(0, _this.infiniteCount - 1);
            }
            else {
                _this.infiniteCount += _this.matches.length;
                _this.displayedMatches = _this.matches.slice(0, _this.infiniteCount - 1);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LeaguePage.prototype.matchSelected = function (match) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__match_match__["a" /* MatchPage */], { match: match, matches: this.matches });
        modal.present();
    };
    LeaguePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LeaguePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.infiniteCount < this.matches.length) {
            setTimeout(function () {
                if (_this.matches.length > _this.infiniteCount + 20) {
                    var nextPortion = _this.matches.slice(_this.infiniteCount, _this.infiniteCount + 19);
                    _this.infiniteCount += 20;
                    _this.displayedMatches = _this.displayedMatches.concat(nextPortion);
                    infiniteScroll.complete();
                }
                else {
                    var nextPortion = _this.matches.slice(_this.infiniteCount, _this.matches.length - 1);
                    _this.infiniteCount = _this.matches.length;
                    _this.displayedMatches = _this.displayedMatches.concat(nextPortion);
                    infiniteScroll.complete();
                }
            }, 500);
        }
        else {
            infiniteScroll.complete();
        }
    };
    return LeaguePage;
}());
LeaguePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-league',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/league/league.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>{{ league }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title item-start>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button class="match-button" ion-item *ngFor="let match of displayedMatches" (click)="matchSelected(match)">\n      <span>{{ match.Team1 }} vs {{ match.Team2 }}</span>\n      <span item-end>{{ match.League }}</span>\n    </button>  \n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/league/league.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_match_match__["a" /* MatchProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
], LeaguePage);

//# sourceMappingURL=league.js.map

/***/ }),

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/league/league.module": [
		276,
		2
	],
	"../pages/match-detail/match-detail.module": [
		275,
		1
	],
	"../pages/match/match.module": [
		277,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matches_matches__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_leagues_top_leagues__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    // tab4Root = SettingsPage;
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__matches_matches__["a" /* MatchesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__top_leagues_top_leagues__["a" /* TopLeaguesPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/tabs/tabs.html"*/'<ion-tabs selectedIndex="2">\n  <ion-tab [root]="tab1Root" tabTitle="Login" tabIcon="contact"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Popular Games" tabIcon="football"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Top Leagues" tabIcon="trophy"></ion-tab>\n  <!-- <ion-tab [root]="tab4Root" tabTitle="Settings" tabIcon="settings"></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_match_match__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_match__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchesPage = (function () {
    function MatchesPage(navCtrl, modalCtrl, matchProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.matchProvider = matchProvider;
        this.displayedMatches = [];
        this.matches = [];
        this.infiniteCount = 0;
        this.getMatches();
    }
    MatchesPage.prototype.getMatches = function () {
        var _this = this;
        this.matchProvider.getMatches()
            .then(function (matches) {
            _this.matches = matches;
            _this.matches = _this.matches.sort(function (a, b) {
                return a.League.localeCompare(b.League);
            });
            if (_this.matches.length > 20) {
                _this.infiniteCount += 20;
                _this.displayedMatches = _this.matches.slice(0, _this.infiniteCount - 1);
            }
            else {
                _this.infiniteCount += _this.matches.length;
                _this.displayedMatches = _this.matches.slice(0, _this.infiniteCount - 1);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    MatchesPage.prototype.matchSelected = function (match) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__match_match__["a" /* MatchPage */], { match: match, matches: this.matches });
        modal.present();
    };
    MatchesPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.infiniteCount < this.matches.length) {
            setTimeout(function () {
                if (_this.matches.length > _this.infiniteCount + 20) {
                    var nextPortion = _this.matches.slice(_this.infiniteCount, _this.infiniteCount + 19);
                    _this.infiniteCount += 20;
                    _this.displayedMatches = _this.displayedMatches.concat(nextPortion);
                    infiniteScroll.complete();
                }
                else {
                    var nextPortion = _this.matches.slice(_this.infiniteCount, _this.matches.length - 1);
                    _this.infiniteCount = _this.matches.length;
                    _this.displayedMatches = _this.displayedMatches.concat(nextPortion);
                    infiniteScroll.complete();
                }
            }, 500);
        }
        else {
            infiniteScroll.complete();
        }
    };
    return MatchesPage;
}());
MatchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-matches',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/matches/matches.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Popular Matches</ion-title>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button class="match-button" ion-item *ngFor="let match of displayedMatches" (click)="matchSelected(match)">\n      <span>{{ match.Team1 }} vs {{ match.Team2 }}</span>\n      <span item-end>{{ match.League }}</span>\n    </button>  \n  </ion-list>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/matches/matches.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_match_match__["a" /* MatchProvider */]])
], MatchesPage);

//# sourceMappingURL=matches.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="with-hero" padding>\n\n  <div class="odds-hero">\n    <span>Login for the best local odds and a personalised experience!</span>\n  </div>\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Mobile Number</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Football Team</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Country</ion-label>\n      <ion-input type="text"></ion-input>\n    </ion-item>\n\n    <button ion-button block icon-left>\n      <ion-icon name="logo-facebook" item-start></ion-icon>\n      Login with Facebook\n    </button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeaguesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_match_match__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__league_league__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TopLeaguesPage = (function () {
    function TopLeaguesPage(navCtrl, modalCtrl, matchProvider) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.matchProvider = matchProvider;
        this.topLeagues = [];
    }
    TopLeaguesPage.prototype.ionViewDidLoad = function () {
        this.getTopLeagues();
    };
    TopLeaguesPage.prototype.getTopLeagues = function () {
        var _this = this;
        this.matchProvider.getTopLeagues()
            .then(function (topLeagues) {
            _this.topLeagues = topLeagues;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    TopLeaguesPage.prototype.openLeague = function (league) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__league_league__["a" /* LeaguePage */], { league: league });
        modal.present();
    };
    return TopLeaguesPage;
}());
TopLeaguesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-top-leagues',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/top-leagues/top-leagues.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Top Leagues</ion-title>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-button block *ngFor="let league of topLeagues" (click)="openLeague(league)">{{ league }}</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/top-leagues/top-leagues.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_match_match__["a" /* MatchProvider */]])
], TopLeaguesPage);

//# sourceMappingURL=top-leagues.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_matches_matches__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_top_leagues_top_leagues__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_match_match__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_match_detail_match_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_league_league__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_match_match__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_matches_matches__["a" /* MatchesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_top_leagues_top_leagues__["a" /* TopLeaguesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_match_match__["a" /* MatchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_match_detail_match_detail__["a" /* MatchDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_league_league__["a" /* LeaguePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match-detail/match-detail.module#MatchDetailPageModule', name: 'MatchDetailPage', segment: 'match-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/league/league.module#LeaguePageModule', name: 'LeaguePage', segment: 'league', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_matches_matches__["a" /* MatchesPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_top_leagues_top_leagues__["a" /* TopLeaguesPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_match_match__["a" /* MatchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_match_detail_match_detail__["a" /* MatchDetailPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_league_league__["a" /* LeaguePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_16__providers_match_match__["a" /* MatchProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Settings</ion-title>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatchProvider = (function () {
    function MatchProvider(http) {
        this.http = http;
        // this.apiRoot = 'http://localhost:3080/api/';
        this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
        this.apiRoutes = {
            getMatches: this.apiRoot + 'matches',
            getMatchesByLeague: this.apiRoot + 'matches/league/',
            getTopLeagues: this.apiRoot + 'matches/top-leagues'
        };
    }
    MatchProvider.prototype.getMatches = function () {
        var url = this.apiRoutes.getMatches;
        var promise = this.http.get(url)
            .map(function (res) { return res.json(); })
            .toPromise();
        return promise;
    };
    MatchProvider.prototype.getMatchesByLeague = function (league) {
        var url = this.apiRoutes.getMatchesByLeague + league;
        var promise = this.http.get(url)
            .map(function (res) { return res.json(); })
            .toPromise();
        return promise;
    };
    MatchProvider.prototype.getTopLeagues = function () {
        var url = this.apiRoutes.getTopLeagues;
        var promise = this.http.get(url)
            .map(function (res) { return res.json(); })
            .toPromise();
        return promise;
    };
    return MatchProvider;
}());
MatchProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MatchProvider);

var ApiRoutes = (function () {
    function ApiRoutes() {
    }
    return ApiRoutes;
}());
//# sourceMappingURL=match.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_detail_match_detail__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MatchPage = (function () {
    function MatchPage(navCtrl, navParams, viewCtrl, modalCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.socialSharing = socialSharing;
        this.matches = [];
        this.regions = [];
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        this.match = this.navParams.get('match');
        this.matches = this.navParams.get('matches');
        var _loop_1 = function (matchInstance) {
            var region = this_1.regions.find(function (el) {
                return el.name === matchInstance.Region;
            });
            if (typeof region === 'undefined') {
                this_1.regions.push({
                    name: matchInstance.Region,
                    matchInstances: [matchInstance]
                });
            }
            else {
                if (region.name === matchInstance.Region) {
                    region.matchInstances.push(matchInstance);
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.match.MatchInstances; _i < _a.length; _i++) {
            var matchInstance = _a[_i];
            _loop_1(matchInstance);
        }
    };
    MatchPage.prototype.matchInstanceSelected = function (matchInstance) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__match_detail_match_detail__["a" /* MatchDetailPage */], { matchInstance: matchInstance });
        modal.present();
    };
    MatchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MatchPage.prototype.share = function (matchInstance) {
        var options = {
            message: 'Check out these odds.',
            subject: 'OddsFinder Odds',
            url: 'https://oddsfinder-app.herokuapp.com',
            chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title
        };
        this.socialSharing.shareWithOptions(options)
            .then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return MatchPage;
}());
MatchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-match',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/match/match.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center *ngIf="!match">Match</ion-title>\n    <ion-title text-center *ngIf="match">{{ match.Team1 }} vs {{ match.Team2 }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title item-start>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list *ngIf="match">\n    <!-- <ion-list-header>\n      <span class="psuedokey" item-end>{{ match.PsuedoKey }}</span>\n    </ion-list-header> -->\n    <ion-list-header>\n      {{ match.League }}\n    </ion-list-header>\n    <div *ngFor="let region of regions">\n      <ion-list-header class="match-league">\n        {{ region.name }}\n      </ion-list-header>\n      <ion-item class="match-instance" *ngFor="let matchInstance of region.matchInstances">\n        <img *ngIf="matchInstance.Service === \'Betway\'" src="../../assets/images/betway.png">\n        <img *ngIf="matchInstance.Service === \'MerryBet\'" src="../../assets/images/merrybet.png">\n        <img *ngIf="matchInstance.Service === \'PrincessBet\'" src="../../assets/images/princessbet.png">\n        <img *ngIf="matchInstance.Service === \'BetPawa\'" src="../../assets/images/betpawa.png">\n        <img *ngIf="matchInstance.Service === \'LovingBet\'" src="../../assets/images/lovingbet.png">\n        <div item-end>\n          <span (click)="share(matchInstance)" class="share">Share</span>\n          <span>{{ matchInstance.Team1.Price }}</span>\n          <span>{{ matchInstance.DrawPrice }}</span>\n          <span>{{ matchInstance.Team2.Price }}</span>\n        </div>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/match/match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], MatchPage);

//# sourceMappingURL=match.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map