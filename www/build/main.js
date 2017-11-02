webpackJsonp([3],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(82);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
], MatchDetailPage);

//# sourceMappingURL=match-detail.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaguePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_match_match__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_match__ = __webpack_require__(53);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_match_match__["a" /* MatchProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], LeaguePage);

//# sourceMappingURL=league.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/league/league.module": [
		282,
		2
	],
	"../pages/match-detail/match-detail.module": [
		283,
		1
	],
	"../pages/match/match.module": [
		281,
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
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matches_matches__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__top_leagues_top_leagues__ = __webpack_require__(207);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_match_match__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__match_match__ = __webpack_require__(53);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_match_match__["a" /* MatchProvider */]])
], MatchesPage);

//# sourceMappingURL=matches.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(206);
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
    function LoginPage(navCtrl, authProvider, toastCtrl, geolocation, http, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.toastCtrl = toastCtrl;
        this.geolocation = geolocation;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.authType = 'login';
        this.allowUserLocation = true;
        this.user = {
            mobile_number: '',
            email: '',
            password: '',
            football_team: '',
            location: null,
            country: null
        };
        this.formFields = {
            mobile_number: true,
            email: true,
            password: true,
            football_team: true,
            location: true,
            country: true
        };
        this.passwordRules = {
            minChars: false,
            maxChars: false,
            minNumbers: false,
            minLetters: false
        };
        this.validationFailureMessage = '';
        this.countryList = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.authProvider.isAuthed().then(function (data) {
            console.log(data);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.createUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'crescent',
            enableBackdropDismiss: false
        });
        loading.present();
        var formValid = this.validateForm();
        if (formValid) {
            if (this.allowUserLocation) {
                this.geolocation.getCurrentPosition()
                    .then(function (resp) {
                    _this.user.location = {
                        latitude: resp.coords.latitude,
                        longitude: resp.coords.longitude
                    };
                    var countryCodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + _this.user.location.latitude + ',' + _this.user.location.longitude + '&key=&key=AIzaSyC0lkUzUVFH4_UbcbF5IurOtPuusq3J2-Y';
                    return _this.http.get(countryCodeUrl)
                        .map(function (res) { return res.json(); })
                        .toPromise();
                })
                    .then(function (data) {
                    var addressComponents = data.results[0].address_components;
                    var countryComponent = addressComponents.find(function (el) {
                        return el.types.includes('country');
                    });
                    _this.user.country = countryComponent.long_name;
                    _this.authProvider.createUser(_this.user)
                        .then(function (data) {
                        if (data.error) {
                            loading.dismiss();
                            _this.presentToast('Error creating account.');
                        }
                        else {
                            loading.dismiss();
                            _this.loginUser();
                        }
                    })
                        .catch(function (err) {
                        loading.dismiss();
                        _this.presentToast('Error creating account.');
                    });
                })
                    .catch(function (error) {
                    loading.dismiss();
                    _this.presentToast('Error getting location.');
                });
            }
            else {
                this.authProvider.createUser(this.user)
                    .then(function (data) {
                    if (data.error) {
                        loading.dismiss();
                        _this.presentToast('Error creating account.');
                    }
                    else {
                        loading.dismiss();
                        _this.loginUser();
                    }
                })
                    .catch(function (err) {
                    loading.dismiss();
                    _this.presentToast('Error creating account.');
                });
            }
        }
        else {
            loading.dismiss();
        }
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...',
            spinner: 'crescent',
            enableBackdropDismiss: false
        });
        loading.present();
        var formValid = this.validateForm();
        if (formValid) {
            this.authProvider.loginUser(this.user)
                .then(function (data) {
                loading.dismiss();
                console.log(data);
                if (data.error) {
                    _this.presentToast(data.error);
                }
                else {
                    _this.presentToast('Hello ' + _this.authProvider.currentUser.email + '!');
                }
            })
                .catch(function (err) {
                loading.dismiss();
                console.log(err);
            });
        }
    };
    LoginPage.prototype.logoutUser = function () {
        var _this = this;
        this.authProvider.logoutUser();
        setTimeout(function () {
            _this.content.resize();
        }, 50);
    };
    LoginPage.prototype.validateForm = function () {
        if (this.authType === 'login') {
            var passwordValidation = this.checkPwd();
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(this.user.email)) {
                this.formFields.email = false;
                this.validationFailureMessage = 'Email address is not valid.';
                this.presentToast(this.validationFailureMessage);
                return false;
            }
            else {
                this.formFields.email = true;
            }
            if (!passwordValidation) {
                this.formFields.password = false;
                return false;
            }
            else {
                this.formFields.password = true;
            }
            return true;
        }
        else if (this.authType = 'register') {
            var passwordValidation = this.checkPwd();
            var re = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
            if (!re.test(this.user.mobile_number)) {
                this.formFields.mobile_number = false;
                this.validationFailureMessage = 'Mobile number is not valid.';
                this.presentToast(this.validationFailureMessage);
                return false;
            }
            else {
                this.formFields.mobile_number = true;
            }
            re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(this.user.email)) {
                this.formFields.email = false;
                this.validationFailureMessage = 'Email address is not valid.';
                this.presentToast(this.validationFailureMessage);
                return false;
            }
            else {
                this.formFields.email = true;
            }
            if (!passwordValidation) {
                this.formFields.password = false;
                return false;
            }
            else {
                this.formFields.password = true;
            }
            if (!this.allowUserLocation) {
                if (this.user.country === null) {
                    this.formFields.country = false;
                    this.validationFailureMessage = 'Country must be selected if location is not used.';
                    this.presentToast(this.validationFailureMessage);
                    return false;
                }
                else {
                    this.formFields.country = true;
                }
            }
            return true;
        }
    };
    LoginPage.prototype.validatePassword = function () {
        var minChars = this.checkMinChars(this.user.password);
        var maxChars = this.checkMaxChars(this.user.password);
        var minLetters = this.checkMinLetters(this.user.password);
        var minNumbers = this.checkMinNumbers(this.user.password);
    };
    LoginPage.prototype.checkPwd = function () {
        for (var rule in this.passwordRules)
            if (!this.passwordRules[rule])
                return false;
        return true;
    };
    LoginPage.prototype.checkMinChars = function (str) {
        if (str.length < 6) {
            this.passwordRules.minChars = false;
            return ({ passed: false, message: 'Password must contain at least 6 characters.' });
        }
        else {
            this.passwordRules.minChars = true;
            return ({ passed: true, message: 'OK' });
        }
    };
    LoginPage.prototype.checkMaxChars = function (str) {
        if (str.length > 50) {
            this.passwordRules.maxChars = false;
            return ({ passed: false, message: 'Password must be shorter than 50 characters.' });
        }
        else {
            this.passwordRules.maxChars = true;
            return ({ passed: true, message: 'OK' });
        }
    };
    LoginPage.prototype.checkMinNumbers = function (str) {
        if (str.search(/\d/) == -1) {
            this.passwordRules.minNumbers = false;
            return ({ passed: false, message: 'Password must contain at least 1 number.' });
        }
        else {
            this.passwordRules.minNumbers = true;
            return ({ passed: true, message: 'OK' });
        }
    };
    LoginPage.prototype.checkMinLetters = function (str) {
        if (str.search(/[a-zA-Z]/) == -1) {
            this.passwordRules.minLetters = false;
            return ({ passed: false, message: 'Password must contain at least 1 letter.' });
        }
        else {
            this.passwordRules.minLetters = true;
            return ({ passed: true, message: 'OK' });
        }
    };
    LoginPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    };
    return LoginPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], LoginPage.prototype, "content", void 0);
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>Login</ion-title>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="with-hero" padding *ngIf="!authProvider.currentUser">\n\n  <div class="odds-hero">\n    <span>Login for the best local odds and a personalised experience!</span>\n  </div>\n\n  <ion-segment [(ngModel)]="authType">\n    <ion-segment-button value="login">\n      Login\n    </ion-segment-button>\n    <ion-segment-button value="register">\n      Register\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="authType">\n    <ion-list *ngSwitchCase="\'login\'">\n\n      <ion-item [ngClass]="{\'invalid\': !formFields.email}">\n        <ion-label floating>Email Address</ion-label>\n        <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="{\'invalid\': !formFields.password}">\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password" (focus)="passwordFocus = true" (focusout)="passwordFocus = false" (keyup)="validatePassword()" (keyup.enter)="loginUser()"></ion-input>\n      </ion-item>\n\n      <div class="password-rules" *ngIf="passwordFocus">\n        <ul>\n          <li [ngClass]="{\'invalid\': !passwordRules.minChars, \'valid\': passwordRules.minChars}">Password must contain at least 6 characters.</li>\n          <li [ngClass]="{\'invalid\': !passwordRules.maxChars, \'valid\': passwordRules.maxChars}">Password must be shorter than 50 characters.</li>\n          <li [ngClass]="{\'invalid\': !passwordRules.minNumbers, \'valid\': passwordRules.minNumbers}">Password must contain at least 1 number.</li>\n          <li [ngClass]="{\'invalid\': !passwordRules.minLetters, \'valid\': passwordRules.minLetters}">Password must contain at least 1 letter.</li>\n        </ul>\n      </div>\n\n      <button ion-button block icon-left (click)="loginUser()">\n        <ion-icon name="contact" item-start></ion-icon>\n        Login\n      </button>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'register\'">\n\n      <ion-item [ngClass]="{\'invalid\': !formFields.mobile_number}">\n        <ion-label floating>Mobile Number</ion-label>\n        <ion-input type="tel" [(ngModel)]="user.mobile_number"></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="{\'invalid\': !formFields.football_team}">\n        <ion-label floating>Football Team</ion-label>\n        <ion-input type="text" [(ngModel)]="user.football_team"></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="{\'invalid\': !formFields.email}">\n        <ion-label floating>Email Address</ion-label>\n        <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n\n      <ion-item [ngClass]="{\'invalid\': !formFields.password}">\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password" (focus)="passwordFocus = true" (focusout)="passwordFocus = false" (keyup)="validatePassword()"></ion-input>\n      </ion-item>\n\n      <div class="password-rules" *ngIf="passwordFocus">\n        <ul>\n          <li [ngClass]="{\'invalid\': !passwordRules.minChars, \'valid\': passwordRules.minChars}">Password must contain at least 6 characters.</li>\n          <li [ngClass]="{\'invalid\': !passwordRules.maxChars, \'valid\': passwordRules.maxChars}">Password must be shorter than 50 characters.</li>\n          <li [ngClass]="{\'invalid\': !passwordRules.minNumbers, \'valid\': passwordRules.minNumbers}">Password must contain at least 1 number.</li>\n          <li [ngClass]="{\'invalid\': !passwordRules.minLetters, \'valid\': passwordRules.minLetters}">Password must contain at least 1 letter.</li>\n        </ul>\n      </div>\n\n      <ion-item class="location-notification">\n        <ion-label> Use My Location to provide me with personalized odds.</ion-label>\n        <ion-toggle [(ngModel)]="allowUserLocation"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf="allowUserLocation === false">\n        <ion-label floating>Country</ion-label>\n        <ion-select [(ngModel)]="user.country">\n          <ion-option value="{{country}}" *ngFor="let country of countryList">{{country}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n\n      <button ion-button block icon-left (click)="createUser()">\n        <ion-icon name="contact" item-start></ion-icon>\n        Register\n      </button>\n\n    </ion-list>\n    \n  </div>\n</ion-content>\n\n<ion-content class="content--logged-in" padding *ngIf="authProvider.currentUser">\n  <div class="logged-in-container" *ngIf="authProvider.currentUser">\n      <ion-icon name="checkbox"></ion-icon>\n      <h1>{{authProvider.currentUser.email}}</h1>\n      <p>Thanks for signing in again!</p>\n      <button ion-button block (click)="logoutUser()">\n        Logout\n      </button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthProvider = (function () {
    function AuthProvider(http, events, storage, loadingCtrl) {
        this.http = http;
        this.events = events;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.currentUser = null;
        this.apiRoot = 'http://localhost:3080/api/';
        // this.apiRoot = 'https://oddsfinder-api.herokuapp.com/api/';
        this.apiRoutes = {
            getUser: this.apiRoot + 'users',
            createUser: this.apiRoot + 'users',
            loginUser: this.apiRoot + 'users/login'
        };
    }
    AuthProvider.prototype.getUser = function (userId) {
        var url = this.apiRoutes.getUser + userId;
        var promise = this.http.get(url)
            .map(function (res) { return res.json(); })
            .toPromise();
        return promise;
    };
    AuthProvider.prototype.createUser = function (user) {
        var _this = this;
        var url = this.apiRoutes.createUser;
        var promise = this.http.post(url, user)
            .map(function (res) { return res.json(); })
            .toPromise();
        promise.then(function (data) {
            if (data.error) {
                console.log(data.error);
            }
            else {
                _this.storage.set('user', data);
                _this.storage.set('userExp', new Date(Date.now() + (1000 * 60 * 60 * 24)));
                _this.currentUser = data;
            }
        });
        return promise;
    };
    AuthProvider.prototype.loginUser = function (user) {
        var _this = this;
        var url = this.apiRoutes.loginUser;
        var promise = this.http.post(url, user)
            .map(function (res) { return res.json(); })
            .toPromise();
        promise.then(function (data) {
            if (data.error) {
                console.log(data.error);
            }
            else {
                _this.storage.set('user', data);
                _this.storage.set('userExp', new Date(Date.now() + (1000 * 60 * 60 * 24)));
                _this.currentUser = data;
            }
        });
        return promise;
    };
    AuthProvider.prototype.logoutUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.currentUser = null;
            _this.storage.remove('user').then(function () {
                _this.storage.remove('userExp').then(function () {
                    resolve();
                }, function (error) {
                    reject(error);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthProvider.prototype.isAuthed = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.currentUser) {
                console.log(_this.currentUser);
                _this.events.publish('user:login');
                resolve(true);
            }
            else {
                _this.checkStorageUser()
                    .then(function (userData) {
                    if (!_this.currentUser) {
                        reject(false);
                    }
                    else {
                        _this.events.publish('user:login', _this.currentUser);
                        resolve(true);
                    }
                })
                    .catch(function (error) {
                    reject(false);
                });
            }
        });
    };
    AuthProvider.prototype.checkStorageUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('userExp')
                .then(function (userExp) {
                var userStorageValid = _this.compareExpirationDate(userExp);
                if (userStorageValid) {
                    _this.storage.get('user').then(function (userdata) {
                        _this.currentUser = userdata;
                        resolve(_this.currentUser);
                    });
                }
                else {
                    reject('No local user found');
                }
            })
                .catch(function (err) {
                reject('No local user found');
            });
        });
    };
    AuthProvider.prototype.compareExpirationDate = function (expDate) {
        var currentDate = new Date(Date.now());
        if (currentDate > expDate) {
            return false;
        }
        else {
            return true;
        }
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */]])
], AuthProvider);

var ApiRoutes = (function () {
    function ApiRoutes() {
    }
    return ApiRoutes;
}());
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopLeaguesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_match_match__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__league_league__ = __webpack_require__(108);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_match_match__["a" /* MatchProvider */]])
], TopLeaguesPage);

//# sourceMappingURL=top-leagues.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_matches_matches__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_top_leagues_top_leagues__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_match_match__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_league_league__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_match_match__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__ = __webpack_require__(206);
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
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_matches_matches__["a" /* MatchesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_top_leagues_top_leagues__["a" /* TopLeaguesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_match_match__["a" /* MatchPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__["a" /* MatchDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_league_league__["a" /* LeaguePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_Storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/match/match.module#MatchPageModule', name: 'MatchPage', segment: 'match', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/league/league.module#LeaguePageModule', name: 'LeaguePage', segment: 'league', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/match-detail/match-detail.module#MatchDetailPageModule', name: 'MatchDetailPage', segment: 'match-detail', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_matches_matches__["a" /* MatchesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_top_leagues_top_leagues__["a" /* TopLeaguesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_match_match__["a" /* MatchPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_match_detail_match_detail__["a" /* MatchDetailPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_league_league__["a" /* LeaguePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_match_match__["a" /* MatchProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(203);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(85);
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

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_detail_match_detail__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(82);
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
        selector: 'page-match',template:/*ion-inline-start:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/match/match.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center *ngIf="!match">Match</ion-title>\n    <ion-title text-center *ngIf="match">{{ match.Team1 }} vs {{ match.Team2 }}</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-navbar class="logo">\n    <ion-title item-start>Odds<span class="text-accent--green">Finder</span></ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list *ngIf="match">\n    <!-- <ion-list-header>\n      <span class="psuedokey" item-end>{{ match.PsuedoKey }}</span>\n    </ion-list-header> -->\n    <ion-list-header>\n      {{ match.League }}\n    </ion-list-header>\n    <div *ngFor="let region of regions">\n      <ion-list-header class="match-league">\n        {{ region.name }}\n      </ion-list-header>\n      <ion-item class="match-instance" *ngFor="let matchInstance of region.matchInstances">\n        <img *ngIf="matchInstance.Service === \'Betway\'" src="assets/images/betway.png">\n        <img *ngIf="matchInstance.Service === \'MerryBet\'" src="assets/images/merrybet.png">\n        <img *ngIf="matchInstance.Service === \'PrincessBet\'" src="assets/images/princessbet.png">\n        <img *ngIf="matchInstance.Service === \'BetPawa\'" src="assets/images/betpawa.png">\n        <img *ngIf="matchInstance.Service === \'LovingBet\'" src="assets/images/lovingbet.png">\n        <div item-end>\n          <span (click)="share(matchInstance)" class="share">Share</span>\n          <span>{{ matchInstance.Team1.Price }}</span>\n          <span>{{ matchInstance.DrawPrice }}</span>\n          <span>{{ matchInstance.Team2.Price }}</span>\n        </div>\n      </ion-item>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/stevenhalase/Documents/oddsfinder-app/oddsfinder/src/pages/match/match.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]])
], MatchPage);

//# sourceMappingURL=match.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map